import styled from 'styled-components';

export const TagContainer = styled.div`
  border-radius: ${(props) => props.$write ? '6px' : '30px'};
  background: ${(props) => props.$bg};
  padding-left: 9px;
  padding-right: 9px;
  width: fit-content;
  display: flex;
  align-items: center;
  height: ${(props) => props.$height};
`;
