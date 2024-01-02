import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';
import { colors } from '../../utils';

export const buttonVariants = ['primary', 'secondary', 'error', 'neutral'];
const Button = ({
  variant = 'primary',
  height = '20px',
  width = '100%',
  outline = false,
  children,
  ...rest
}) => {
  const getColorCode = (variant) => {
    let code;
    switch (variant) {
      case 'primary':
        code = colors.primary[200];
        break;
      case 'neutral':
        code = colors.primary[300];
        break;
      case 'error':
        code = colors.error[50];
        break;

      default:
        code = colors.neutral[50];
        break;
    }
    return code;
  };
  return (
    <S.ButtonContainer
      $width={width}
      $height={height}
      $bg={getColorCode(variant)}
      $variant={variant}
      {...rest}
    >
      {children}
    </S.ButtonContainer>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([...buttonVariants]),
  height: PropTypes.string,
  width: PropTypes.string,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired || PropTypes.string.isRequired,
};

export default Button;
