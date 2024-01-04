import React, { useRef } from 'react';
import * as S from './Menu.style';
import { useClickOutside } from '../../utils';

const Menu = ({
  show = false,
  position = 'bottom',
  setShow,
  children,
  ...rest
}) => {
  const menuRef = useRef(null);

  useClickOutside(menuRef, (e) => {
    const target = e.target;

    if (menuRef.current && !menuRef.current.contains(target)) {
      setShow(false);
    }
  });
  return (
    <S.MenuContainer
      ref={menuRef}
      $bottom={position === 'bottom'}
      style={{ ...rest.style, display: show ? 'block' : 'none' }}
    >
      {children}
    </S.MenuContainer>
  );
};

export default Menu;
