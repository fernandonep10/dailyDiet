import React from "react";
import { Modal } from "react-native";
import * as S from "./styles";

type Props = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ModalDelete({ visible, onCancel, onConfirm }: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <S.Overlay>
        <S.ModalContent>
          <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>

          <S.ButtonContainer>
            <S.CancelButton onPress={onCancel}>
              <S.CancelText>Cancelar</S.CancelText>
            </S.CancelButton>

            <S.ConfirmButton onPress={onConfirm}>
              <S.ConfirmText>Sim, excluir</S.ConfirmText>
            </S.ConfirmButton>
          </S.ButtonContainer>
        </S.ModalContent>
      </S.Overlay>
    </Modal>
  );
}
