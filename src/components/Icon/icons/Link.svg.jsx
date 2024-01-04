/* eslint-disable max-len */
import React from 'react';
import { IconWrapper } from '../Icon.style';

export const Link = ({ ...rest }) => {
  // Add this for icons with fill
  const iconWeight = { ...rest }.$defaultWeight ? 0 : { ...rest }.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1098 15.39L8.22984 19.27C7.76007 19.7233 7.1327 19.9767 6.47984 19.9767C5.82698 19.9767 5.1996 19.7233 4.72984 19.27C4.49944 19.0405 4.31663 18.7678 4.19189 18.4675C4.06715 18.1671 4.00294 17.8452 4.00294 17.52C4.00294 17.1948 4.06715 16.8728 4.19189 16.5725C4.31663 16.2722 4.49944 15.9995 4.72984 15.77L8.60984 11.89C8.79814 11.7017 8.90393 11.4463 8.90393 11.18C8.90393 10.9137 8.79814 10.6583 8.60984 10.47C8.42153 10.2817 8.16614 10.1759 7.89984 10.1759C7.63353 10.1759 7.37814 10.2817 7.18984 10.47L3.30984 14.36C2.52819 15.2108 2.10546 16.3306 2.12991 17.4857C2.15436 18.6408 2.62412 19.7418 3.44107 20.5587C4.25802 21.3757 5.359 21.8454 6.51408 21.8699C7.66917 21.8944 8.78904 21.4716 9.63984 20.69L13.5298 16.81C13.7181 16.6217 13.8239 16.3663 13.8239 16.1C13.8239 15.8337 13.7181 15.5783 13.5298 15.39C13.3415 15.2017 13.0861 15.0959 12.8198 15.0959C12.5535 15.0959 12.2981 15.2017 12.1098 15.39ZM20.6898 3.30997C19.8486 2.47398 18.7108 2.00476 17.5248 2.00476C16.3389 2.00476 15.2011 2.47398 14.3598 3.30997L10.4698 7.18997C10.3766 7.28321 10.3026 7.3939 10.2522 7.51572C10.2017 7.63755 10.1757 7.76811 10.1757 7.89997C10.1757 8.03183 10.2017 8.1624 10.2522 8.28422C10.3026 8.40604 10.3766 8.51673 10.4698 8.60997C10.5631 8.70321 10.6738 8.77717 10.7956 8.82763C10.9174 8.87809 11.048 8.90406 11.1798 8.90406C11.3117 8.90406 11.4423 8.87809 11.5641 8.82763C11.6859 8.77717 11.7966 8.70321 11.8898 8.60997L15.7698 4.72997C16.2396 4.2766 16.867 4.02323 17.5198 4.02323C18.1727 4.02323 18.8001 4.2766 19.2698 4.72997C19.5002 4.95946 19.683 5.23218 19.8078 5.53249C19.9325 5.8328 19.9967 6.15479 19.9967 6.47997C19.9967 6.80516 19.9325 7.12714 19.8078 7.42745C19.683 7.72776 19.5002 8.00049 19.2698 8.22997L15.3898 12.11C15.2961 12.2029 15.2217 12.3135 15.1709 12.4354C15.1202 12.5573 15.094 12.688 15.094 12.82C15.094 12.952 15.1202 13.0827 15.1709 13.2045C15.2217 13.3264 15.2961 13.437 15.3898 13.53C15.4828 13.6237 15.5934 13.6981 15.7153 13.7489C15.8371 13.7996 15.9678 13.8258 16.0998 13.8258C16.2318 13.8258 16.3626 13.7996 16.4844 13.7489C16.6063 13.6981 16.7169 13.6237 16.8098 13.53L20.6898 9.63997C21.5258 8.79875 21.995 7.66095 21.995 6.47497C21.995 5.289 21.5258 4.15119 20.6898 3.30997ZM8.82984 15.17C8.92328 15.2627 9.03409 15.336 9.15593 15.3857C9.27777 15.4355 9.40823 15.4607 9.53984 15.46C9.67144 15.4607 9.80191 15.4355 9.92374 15.3857C10.0456 15.336 10.1564 15.2627 10.2498 15.17L15.1698 10.25C15.3581 10.0617 15.4639 9.80627 15.4639 9.53997C15.4639 9.27367 15.3581 9.01828 15.1698 8.82997C14.9815 8.64167 14.7261 8.53588 14.4598 8.53588C14.1935 8.53588 13.9381 8.64167 13.7498 8.82997L8.82984 13.75C8.73611 13.8429 8.66171 13.9535 8.61095 14.0754C8.56018 14.1973 8.53404 14.328 8.53404 14.46C8.53404 14.592 8.56018 14.7227 8.61095 14.8445C8.66171 14.9664 8.73611 15.077 8.82984 15.17Z"
          fill="#262626"
        />
      </svg>
    </IconWrapper>
  );
};