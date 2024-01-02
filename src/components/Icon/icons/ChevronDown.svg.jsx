/* eslint-disable max-len */
import React from 'react';
import { IconWrapper } from '../Icon.style';

export const ChevronDown = ({ ...rest }) => {
  // Add this for icons with fill
  const iconWeight = { ...rest }.$defaultWeight ? 0 : { ...rest }.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.12021 10.2606L12.0002 14.1406L15.8802 10.2606C16.2702 9.87064 16.9002 9.87064 17.2902 10.2606C17.6802 10.6506 17.6802 11.2806 17.2902 11.6706L12.7002 16.2606C12.3102 16.6506 11.6802 16.6506 11.2902 16.2606L6.70021 11.6706C6.31021 11.2806 6.31021 10.6506 6.70021 10.2606C7.09021 9.88064 7.73021 9.87064 8.12021 10.2606Z" />
      </svg>
    </IconWrapper>
  );
};
