import styled from 'styled-components';
import { colors } from '../../utils';

export const SidebarContainer = styled.div`
  height: calc(100vh - 30px);
  position: absolute;
  left: 0;
  width: 286px;
  background: ${colors.primary[200]};
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 30px;
`;

export const SidebarContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;

export const SidebarLogout = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
`;
