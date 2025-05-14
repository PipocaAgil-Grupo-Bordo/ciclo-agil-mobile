import React from "react";
import { Modal, Text } from "react-native";
import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import CheckIcon from "@icons/check.svg";

interface SuccessModalProps {
  visible: boolean;
  message: string;
  onPress: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ visible, message, onPress }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <Sc.ModalOverlay>
        <Sc.ModalContainer>
          <CheckIcon />

          <Sc.ModalMessage>{message}</Sc.ModalMessage>
          <Sc.ButonContainer>
            <GenericButton onPress={onPress} state="accent" padding="9px">
              <Text>Iniciar</Text>
            </GenericButton>
          </Sc.ButonContainer>
        </Sc.ModalContainer>
      </Sc.ModalOverlay>
    </Modal>
  );
};

export default SuccessModal;
