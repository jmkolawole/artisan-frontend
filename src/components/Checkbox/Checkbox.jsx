import React from 'react';
import * as S from './Checkbox.style';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Checkbox = ({ checked, onCheck, disabled = false, ...rest }) => {
  return (
    <S.CheckboxContainer
      onClick={() => (disabled ? null : onCheck())}
      $disabled={disabled}
      $checked={checked}
      {...rest}
    >
      {checked && (
        <Icon name="checkBox" size="16x16" color="primary.200" weight={1} />
      )}
    </S.CheckboxContainer>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Checkbox;
