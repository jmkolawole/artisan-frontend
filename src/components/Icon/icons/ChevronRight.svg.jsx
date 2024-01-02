/* eslint-disable max-len */
import React from 'react';
import {IconWrapper} from '../Icon.style';

export const ChevronRight = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="18"
        height="19"
        viewBox="0 0 24 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_13827_33592)">
          <path
            d="M6.44238 12.9425L9.87738 9.5L6.44238 6.0575L7.49988 5L11.9999 9.5L7.49988 14L6.44238 12.9425Z"
            fill="#323232"
          />
        </g>
        <defs>
          <clipPath id="clip0_13827_33592">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
};
