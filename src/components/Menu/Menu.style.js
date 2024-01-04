import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const MenuContainer = styled.div`
  background: ${colors.neutral.light};
  box-shadow: 0px 4px 25px ${colors.neutral[100]};
  position: absolute;
  //${(props) => (props.$bottom ? 'top: 135%' : 'bottom: 135%')};
  width: max-content;
  z-index: 100;
`;
