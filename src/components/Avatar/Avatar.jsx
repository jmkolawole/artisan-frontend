import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Avatar.style';
import Text from '../Text/Text';
import { avatarText, strToColor } from '../../utils';

const Avatar = ({
  type = 'photo',
  resource,
  bg = 'neutral.light',
  color = 'neutral.dark',
  size = '48x48',
  textSize = 'md',
}) => {
  const width = parseInt(size.split('x')[0]);
  const height = parseInt(size.split('x')[1]);

  return (
    <S.AvatarContainer $height={height} $width={width} $bg={strToColor(bg)}>
      {type === 'photo' ? (
        <img src={resource} />
      ) : (
        <Text color={color} weight={700} size={textSize}>
          {avatarText(resource)}
        </Text>
      )}
    </S.AvatarContainer>
  );
};

Avatar.propTypes = {
  type: PropTypes.oneOf(['text', 'photo']),
  resource: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  textSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xl2']),
};

export default Avatar;
