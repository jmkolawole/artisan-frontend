import React from 'react';
import * as S from './Overlay.style';
import PropTypes from 'prop-types';

const Overlay = ({show, setShow = () => {}, hideOnClick = true}) => {
  const handleClick = () => hideOnClick && setShow(false);
  const overlayStyle = show ? {} : {opacity: 0, zIndex: -1};

  return (
    <S.OverlayContainer
      className="Test"
      onClick={handleClick}
      style={{...overlayStyle}}
    />
  );
};

Overlay.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  hideOnClick: PropTypes.bool,
};

export default Overlay;
