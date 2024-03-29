import { styled } from 'styled-components';
import { colors } from '../../utils';

export const ButtonContainer = styled.button`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  cursor: pointer;
  background-color: ${(props) => props.$outline ? colors.neutral.light : props.$bg};
  border: 1px solid
    ${(props) =>
      props.$variant === 'neutral' ? colors.neutral[200] : props.$bg};
  color: ${(props) =>
    props.$variant === 'neutral' || props.$outline ? colors.neutral[100] : colors.neutral.light};
  border-radius: 6px;
`;
