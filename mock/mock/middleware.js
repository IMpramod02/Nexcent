const fs = require('fs').promises;
const path = require('path');
const dbPath = path.join(__dirname, 'db.json'); // Adjust the second argument to the correct relative path
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');



const SECRET_KEY = 'your_secret_key';
const serverIdentifier = 'serverId';
const expiresIn = '1h';

// Create a utility function to create tokens
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}


async function readJsonFile(filePath) {
  try {
    // Read the file
    const data = await fs.readFile(filePath, 'utf8');
    // Parse the JSON string into an object
    const object = JSON.parse(data);
    return object;
  } catch (err) {
    console.error('Error reading the file:', err);
    throw err; // Rethrow the error for the caller to handle
  }
}

async function writeJsonFile(filePath, data) {
    try { 
      const dataStr = JSON.stringify(data, null, 2); 
      // Read the file
       await fs.writeFile(filePath, dataStr, 'utf8');
      
    } catch (err) {
      console.error('Error reading the file:', err);
      throw err; // Rethrow the error for the caller to handle
    }
  }

async function getUsers() {
    const data = await readJsonFile(dbPath);
    return data['users'];
}

async function createUser(user) {
    const db  =  await readJsonFile(dbPath);
    const newUser = {
        ...user,
        id: uuidv4()
    }
    const db_new = {
        ...db,
        users: [
            ...db['users'],
            newUser
        ]
    }
    setTimeout(async () => {await writeJsonFile(dbPath, db_new)}, 100);
    
    return newUser;
}

// Create a utility function to verify the token
function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);
  }

async function createUserToken(user) {
    return createToken({identifier: serverIdentifier, userId: user['id']})
}

const userIdRegex = new RegExp(/^\/users\/.+/);

module.exports = async (req, res, next ) => {
    res.header('Cache-Control', 'no-store');
      
    switch(req.path) {
        case "/login": {
            console.log(dbPath);
            if(req.method !== 'POST') {
                res.status(400).json({"message": `${req.method} Request is not supported`});
                break;

            }
            try {
            const {username, password} = req.body
            if(username === undefined || password === undefined) {
                res.status(400).json({"message": `${req.method} Request body does not contain username or password`});
                break;

            }
            const user = (await getUsers()).find(item => item.username === username && item.password === password);
            if(!user) {
                res.status(403).json({"message": `Invalid User`});
                break;
            } else {
                res.status(200).json({"isSuccess": true, "token": await createUserToken(user), fullname: user['fullname'], id: user['id']})
            }
            } catch(e) {
                console.log(e)
                res.status(500).json({"message": `Error in processing the request`});
            }
            break;
        }
        case '/register': {
            if(req.method !== 'POST') {
                res.status(400).json({"message": `${req.method} Request is not supported`});
                break;

            }
            try {
               const {username, password} = req.body
                if(username === undefined || password === undefined || username.trim().length === 0 || password.trim().length === 0) {
                    res.status(400).json({"message": `${req.method} Request body does not contain username or password`});
                    break;
                }
                
                const dbUser = (await getUsers()).find(item => item.username === username);

                if(dbUser) {
                    res.status(400).json({"message": `Username is already taken`});
                    break;

                }

                const user = await createUser({...req.body})
                res.status(200).json({"isSuccess": true, "token": await createUserToken(user), fullname: user['fullname'], id: user['id']})
            } catch(e) {
                console.log(e)
                res.status(500).json({"message": `Error in processing the request`});
            }
            break;
        }
        default: {
            console.log("check", userIdRegex.test(req.path),req.path);
            if(userIdRegex.test(req.path)) {
                if(req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
                    const status = 401;
                    const message = 'Error in authorization format';
                    res.status(status).json({ status, message });
                    break;
                } 
                else {
                    try {
                        console.log("check Auth Token");
                        let verifyTokenResult;
                        verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
                        if (verifyTokenResult instanceof Error) {
                            const status = 401;
                            const message = 'Access token not provided';
                            res.status(status).json({ status, message });
                            break;
                        } 
                        if(!req.path.startsWith(`/users/${verifyTokenResult['userId']}`)) {
                            const status = 403;
                            const message = 'UnAuthorized to access data';
                            res.status(status).json({ status, message });
                            break;  
                        }

                        if((req.path ===`/users/${verifyTokenResult['userId']}` || req.path ===`/users/${verifyTokenResult['userId']}/` ) && !(['GET', 'PATCH'].indexOf(req.method) >= 0)) {
                            const status = 403;
                            const message = 'UnAuthorized to access data';
                            res.status(status).json({ status, message });
                            break;  
                        } 
                    } catch (err) {
                        console.log(err);
                        const status = 401;
                        const message = 'Error access_token is revoked';
                        res.status(status).json({ status, message });
                    }
                }
            }
            break;
        }
    }
    next();

}