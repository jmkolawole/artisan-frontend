import React from 'react';
import * as S from './Tag.style';
import PropTypes from 'prop-types';
import { strToColor } from '../../utils';

const Tag = ({bg = 'primary.200', hPadding = 8, children, ...rest}) => {
  return (
    <S.TagContainer
      $bg={strToColor(bg)}
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
  children: PropTypes.node,
};

export default Tag;
