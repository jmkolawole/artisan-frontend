import React from 'react';
import Overlay from '../Overlay/Overlay';
import * as S from './Modals.style';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const RegularModal = ({
  title = 'Modal Name',
  show = false,
  width = 53,
  height = 72,
  cancelAction = () => {},
  confirmAction = () => {},
  confirmText = 'Add Users',
  cancelText = 'Cancel',
  confirmButtonWidth = '128px',
  cancelButtonWidth = '128px',
  children,
  disabled = false,
  showButtons = true,
  ...rest
}) => {
  return (
    <>
      <Overlay show={show} />
      <S.ModalWrapper
        $width={width}
        $height={height}
        {...rest}
        style={{ ...rest.style, display: show ? 'block' : 'none' }}
      >
        {/* <S.TitleContainer>
          <Icon
            name="x"
            size="12x12"
            color="neutral.200"
            onClick={cancelAction}
            style={{ cursor: 'pointer' }}
          />
        </S.TitleContainer> */}

        <S.BodyWrapper $height={height} $showButtons={showButtons}>
          {children}
          {showButtons && (
            <S.ButtonWrapper>
              <Button
                variant={'neutral'}
                width={cancelButtonWidth}
                onClick={cancelAction}
                height="50px"
              >
                {cancelText}
              </Button>

              <Button
                variant={'primary'}
                height="50px"
                width={confirmButtonWidth}
                onClick={confirmAction}
                disabled={disabled}
                style={{textAlign: 'center'}}
              >
                {confirmText}
              </Button>
            </S.ButtonWrapper>
          )}
        </S.BodyWrapper>
      </S.ModalWrapper>
    </>
  );
};

RegularModal.propTypes = {
  title: PropTypes.string.isRequired,
  cancelAction: PropTypes.func,
  show: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node,
  showButtons: PropTypes.bool,
  confirmButtonWidth: PropTypes.string,
  confirmAction: PropTypes.func,
  cancelButtonWidth: PropTypes.string,
  confirmText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  cancelText: PropTypes.string,
  disabled: PropTypes.bool,
};

export default RegularModal;
