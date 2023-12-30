import { styled } from 'styled-components';
import { colors } from '../../utils';

export const ButtonContainer = styled.button`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$bg};
  border: 1px solid
    ${(props) =>
      props.$variant === 'neutral' ? colors.neutral[200] : props.$bg};
  color: ${(props) =>
    props.$variant === 'neutral' ? colors.neutral[100] : colors.neutral.light};
  border-radius: 6px;
`;
