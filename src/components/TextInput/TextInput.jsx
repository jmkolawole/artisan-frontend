import React from 'react';
import * as S from './TextInput.style';
import PropTypes from 'prop-types';
import { InputError, InputLabel } from '../Common.style.js';
import { generateKey } from '../../utils/functions.js';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

const TextInput = ({
  type = 'text',
  size = 'md',
  label,
  error,
  required,
  width = '100%',
  action = false,
  buttonClicked = () => {},
  actionTitle = 'Search',
  icon = {
    show: false,
  },
  ...rest
}) => {
  const hasError = error ? true : false;
  const hasLabel = label?.length && label.length > 0 ? true : false;

  return (
    <S.InputContainer
      $width={width}
      $size={size}
      $hasError={hasError}
      $hasLabel={hasLabel}
      $iconHeight={icon.size && icon.size.split('x')[1]}
    >
      {hasLabel && (
        <InputLabel
          $size={size}
          $disabled={rest?.disabled}
          $required={required}
        >
          {label}
        </InputLabel>
      )}
      <div style={{ display: 'flex' }}>
        <S.Input
          type={type}
          $size={size}
          $error={hasError}
          id={generateKey()}
          $action={action}
          {...rest}
        />

        {action && (
          <Button
            height="48px"
            width="200px"
            variant="primary"
            onClick={buttonClicked}
            style={{
              borderBottomLeftRadius: 'unset',
              borderTopLeftRadius: 'unset',
              paddingLeft: '30px',
              paddingRight: '30px',
              cursor: 'pointer'
            }}
          >
            {actionTitle}
          </Button>
        )}
      </div>

      {icon && icon.show && (
        <Icon
          name={icon.name}
          weight={icon.weight}
          color={icon.color}
          size={icon.size}
          onClick={icon.action}
        />
      )}

      {hasError && <InputError $theme={theme}>{error}</InputError>}
    </S.InputContainer>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'url',
    'date',
    'time',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.shape({
    show: PropTypes.bool,
    name: PropTypes.string,
    color: PropTypes.string,
    weight: PropTypes.number,
    size: PropTypes.string,
    action: PropTypes.func,
  }),
};

export default TextInput;
