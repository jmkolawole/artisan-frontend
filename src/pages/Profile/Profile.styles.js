import styled from 'styled-components';
import { colors } from '../../utils';


export const ProfileWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  padding: 30px 20px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 1200px;
  margin-top: 50px;
  padding: 30px 30px;
  border: 1px solid ${colors.neutral[200]};
`;




