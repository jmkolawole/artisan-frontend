import React from 'react';
import PropTypes from 'prop-types';
import { cssStyleToJsx, fontSize, strToColor } from '../../utils';

const Text = ({
  type = 'text',
  size = 'md',
  weight = 400,
  color='neutral.100',
  children,
  ...rest
}) => {
  let attrs = {};
  if (type === 'text') {
    attrs = {
      fontFamily: 'Raleway',
      fontSize: fontSize.text[size] || fontSize.text.md,
      color: strToColor(color),
      ...rest?.style,
    };
  } else {
    attrs = {
      fontSize: fontSize.display[size],
      color: strToColor(color),
    };
  }
  attrs = weight ? { ...attrs, fontWeight: weight } : attrs;
  return (
    <p {...rest} style={{ ...cssStyleToJsx(attrs) }}>
      {children}
    </p>
  );
};

Text.propTypes = {
  type: PropTypes.oneOf(['text', 'display']),
  size: PropTypes.oneOf(['xs2', 'xs', 'sm', 'md', 'lg', 'xl', 'xl2']),
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  color: PropTypes.string,
  children: PropTypes.node.isRequired || PropTypes.string.isRequired,
};

export default Text;
