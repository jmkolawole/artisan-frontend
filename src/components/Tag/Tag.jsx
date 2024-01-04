import React from 'react';
import * as S from './Tag.style';
import PropTypes from 'prop-types';
import { strToColor } from '../../utils';

const Tag = ({bg = 'primary.200', height = '25px', hPadding = 8, write=false, children, ...rest}) => {
  return (
    <S.TagContainer
      $bg={strToColor(bg)}
      $write={write}
      $height={height}
      {...rest}
      style={{ ...rest?.style, paddingLeft: hPadding, paddingRight: hPadding }}
    >
      {children}
    </S.TagContainer>
  );
};

Tag.propTypes = {
  bg: PropTypes.string,
  hPadding: PropTypes.number,
  write: PropTypes.bool,
  height: PropTypes.string,
  children: PropTypes.node,
};

export default Tag;
