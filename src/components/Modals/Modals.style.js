import styled from 'styled-components';
import { colors } from '../../utils';

const bodyHeight = (height, showButtons) =>
  showButtons ? `calc(${height}px - 150px)` : `calc(${height}px - 100px)`;

export const ModalWrapper = styled.div`
  background-color: ${colors.neutral.light};
  height: ${(props) => props.$height}px;
  width: ${(props) => props.$width}px !important;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  transition: all 0.25s;
  overflow-y: hidden;
`;

export const BodyWrapper = styled.div`
  padding: 0px 0px;
  overflow-y: hidden;
  height: ${(props) => bodyHeight(props.$height, props.$showButtons)};
  margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
  padding: 15px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
  right: 0;
  position: fixed;
  margin-bottom: 40px;
  column-gap: 18px;
  margin-right: 28px;
`;
