import styled from 'styled-components';

export const AvatarContainer = styled.div`
  height: ${(props) => props.$height}px;
  width: ${(props) => props.$width}px;
  overflow: hidden;
  border-radius: 100%;
  background: ${(props) => props.$bg};
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    object-fit: cover;
    object-position: center;
    height: ${(props) => props.$height}px;
  }
`;
