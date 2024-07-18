import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import { Gs } from "src/styles/globalStyles";
import { Modalprops } from "./type";
import { horizontalScale } from "@utils/responsivenessHelper";

// TODO: Add a description for the component
function Modal({ title, textContent, buttonText, onPress, setReadyToNext }: Modalprops) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["45%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) setReadyToNext(false);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      onChange={handleSheetChanges}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: "#FFF" }}
      enablePanDownToClose
      style={{ paddingHorizontal: horizontalScale(20) }}
    >
      <Sc.Container>
        <Gs.Title>{title}</Gs.Title>
        <Sc.Paragraph>{textContent}</Sc.Paragraph>
      </Sc.Container>
      <Sc.ButtonWrapper>
        <GenericButton onPress={onPress} state="accent">
          {buttonText}
        </GenericButton>
      </Sc.ButtonWrapper>
    </BottomSheet>
  );
}

export default Modal;
