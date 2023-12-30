/* eslint-disable max-len */
import React from 'react';
import { IconWrapper } from '../Icon.style';

export const CheckBox = ({ ...rest }) => {
  // Add this for icons with fill
  const iconWeight = { ...rest }.$defaultWeight ? 0 : { ...rest }.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_13134_9559)">
          <path
            d="M8.09722 13.475L4.34545 9.99999L3.06787 11.175L8.09722 15.8333L18.8937 5.83333L17.6251 4.65833L8.09722 13.475Z"
            fill="#004D81"
          />
        </g>
        <defs>
          <clipPath id="clip0_13134_9559">
            <rect width="21.5929" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
};
