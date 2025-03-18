import React, { useCallback, useMemo, useRef } from "react";

import GenericButton from "@components/GenericButton";
import BottomSheet from "@gorhom/bottom-sheet";
import { Palette } from "@styles/palette";
import { horizontalScale } from "@utils/responsivenessHelper";

import { Sc } from "./style";
import { Modalprops } from "./type";

// TODO: Add a description for the component
function Modal({ title, textContent, buttonText, onPress, setReadyToNext }: Modalprops) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "60%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) setReadyToNext(false);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      onChange={handleSheetChanges}
      snapPoints={snapPoints}
      // TODO: Remove this white background once we darken the outerbackground
      backgroundStyle={{ backgroundColor: Palette.neutralWhite[50] }}
      enablePanDownToClose
      style={{ paddingHorizontal: horizontalScale(20) }}
    >
      <Sc.Container>
        <Sc.Title>{title}</Sc.Title>
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
