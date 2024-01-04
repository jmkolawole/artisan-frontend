import styled from 'styled-components';
import { colors } from '../../utils';

export const OverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${colors.primary[300]};
  opacity: 0.5;
  position: fixed;
  z-index: 10;
  transition: all 0.25s;
  top: 0;
  left: 0;
`;
