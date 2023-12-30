import styled from 'styled-components';
import { colors } from '../../utils';

export const CheckboxContainer = styled.div`
  border: solid 1px;
  border-radius: 4px;
  transition: all 0.25s;
  border-color: ${(props) =>
    props.$checked ? colors.primary[200] : colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$selected ? colors.neutral.light : colors.neutral.light};
  height: 20px;
  width: 20px;
  margin: auto;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    border-color: ${(props) =>
      props.$disabled ? colors.primary[200] : colors.primary[200]};
    background: ${(props) =>
      props.$disabled ? colors.neutral.light : colors.neutral.light};
  }
`;
