import styled from 'styled-components';
import { colors } from '../../utils';

export const CategoryWrapper = styled.div`
  padding: 50px 100px;
  width: 65vw;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BodySection = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Body = styled.div`
  & > div:last-of-type {
    border-bottom: unset;
  }
`;

export const Item = styled.div`
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px solid ${colors.neutral[200]};
  justify-content: space-between;
`;
