import styled from 'styled-components';
import { colors, sizes } from '../../utils';

const inputSize = (size) => {
  if (size === 'sm') return 38;
  if (size === 'md') return 46;
  if (size === 'lg') return 54;
};

const iconPosition = (iconHeight, hasLabel, hasError) => {
  const halfIconHeight = iconHeight / 2;

  if ((!hasLabel && !hasError) || (hasError && hasLabel)) {
    return `calc(50% - ${halfIconHeight}px)`;
  } else if (hasLabel && !hasError) {
    return `calc(50% - ${halfIconHeight - 13}px)`;
  } else if (!hasLabel && hasError) {
    return `calc(50% - ${halfIconHeight + 10}px)`;
  }
};

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${(props) => props.$width};
  position: relative;

  & > i {
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: ${(props) =>
      iconPosition(props.$iconHeight, props.$hasLabel, props.$hasError)};
  }
`;

export const Input = styled.input`
  border-radius: 6px;
  ${(props) => props.$action && 'border-top-right-radius: unset'};
  ${(props) => props.$action && 'border-bottom-right-radius: unset'};
  font-family: Raleway;
  padding: 0 16px;
  font-size: ${sizes.s14};
  border: solid 1px
    ${(props) => (props.$error ? colors.error[50] : colors.neutral[200])};
  height: ${(props) => inputSize(props.$size)}px;
  background: ${colors.neutral[300]};
  opacity: 83%;
  color: ${colors.neutral.dark};

  &:hover,
  &:focus,
  &:focus-visible {
    border: solid 1px
      ${(props) => (props.$error ? colors.error[50] : colors.neutral[100])};
    ${(props) => props.$action && 'border-right: unset'};
    outline: unset;
  }

  &:disabled {
    opacity: 0.8;
    background: ${colors.neutral[200]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.neutral[100]};
    font-family: Raleway;
  }
`;
