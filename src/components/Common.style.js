import styled from 'styled-components';
import { colors, sizes } from '../utils';

export const InputError = styled.p`
  color: ${colors.error[50]};
  font-size: ${sizes.s12};
`;

export const InputLabel = styled.p`
  font-size: ${sizes.s14};
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${colors.neutral.dark};
  &::after {
    content: '${(props) => (props.$required ? '*' : '')}';
    color: ${colors.error[50]};
  }
`;
