import React from 'react';
import {icons as C} from './Icon.utils';
import {upperFirst} from 'lodash';
import PropTypes from 'prop-types';
import { strToColor } from '../../utils';


const Icon = ({
  name,
  size = '20x20',
  color='neutral.100',
  weight,
  bg = 'inherit',
  radius = 0,
  padding = 0,
  ...rest
}) => {
  
  const iconName = upperFirst(name);
  const IconComponent = C[iconName];
  const width = parseInt(size.split('x')[0]);
  const height = parseInt(size.split('x')[1]);

  // Set icon weight and default weight (bool) if weight is not specified
  const iconWeight = weight ? weight : 2;
  const defaultWeight = weight ? false : true;

  if (iconName in C) {
    return (
      <IconComponent
        $width={width}
        $height={height}
        $color={strToColor(color)}
        $weight={iconWeight}
        $defaultWeight={defaultWeight}
        $bg={bg === 'inherit' ? 'transparent' : strToColor(bg)}
        $radius={radius}
        $padding={padding}
        {...rest}
      />
    );
  }

  return <></>;
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.number,
  color: PropTypes.string,
  bg: PropTypes.string,
  padding: PropTypes.number,
  radius: PropTypes.number,
};

export default Icon;