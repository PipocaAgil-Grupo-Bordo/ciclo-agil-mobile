import React from "react";
import { Modal } from "react-native";
import { Sc } from "./style";

interface ErrorModalProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ visible, title, message, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <Sc.ModalOverlay>
        <Sc.ModalContainer>
          <Sc.CloseButton onPress={onClose}>
            <Sc.CloseIcon>✕</Sc.CloseIcon>
          </Sc.CloseButton>

          <Sc.ModalTitle>{title}</Sc.ModalTitle>
          <Sc.ModalMessage>{message}</Sc.ModalMessage>
        </Sc.ModalContainer>
      </Sc.ModalOverlay>
    </Modal>
  );
};

export default ErrorModal;
