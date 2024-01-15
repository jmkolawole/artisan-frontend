import styled from 'styled-components';
import { colors } from '../../utils';

export const DashboardContainer = styled.div`
  display: flex;
  height: calc(100vh);
  justify-content: space-between;
  width: 81.8vw;
`;

export const LeftSection = styled.div`
  width: 75%;
  padding: 30px 20px;
`;

export const RightSection = styled.div`
  width: 23%;
  padding: 30px 20px;
  border-left: 1px solid ${colors.neutral[200]};
`;

export const Header = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  margin-top: 10px;
  & > div:last-of-type {
    border-bottom: unset;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.neutral[100]};
`;
