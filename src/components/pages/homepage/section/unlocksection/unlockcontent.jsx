/*import React from 'react';
import UnlockSection from '../unlocksection/unlocksection.jsx';
import { HOME_PAGE_CONSTANTS } from './unlocksection';

const UnlockContent = () => {
  const { heading, paragraph, buttonLabel, imageUrl, imageAlt } =
    HOME_PAGE_CONSTANTS;

  return (
    <UnlockSection
      heading={heading}
      paragraph={paragraph}
      buttonLabel={buttonLabel}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
    />
  );
};

export default UnlockContent;*/

import UnlockSection from './unlocksection.jsx';
import { HOME_PAGE_CONSTANTS } from './unlocksection.js';

const UnlockContent = () => {
  return <UnlockSection {...HOME_PAGE_CONSTANTS} />;
};

export default UnlockContent;
