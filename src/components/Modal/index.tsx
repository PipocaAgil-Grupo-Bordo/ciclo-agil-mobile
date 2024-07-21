import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import { Modalprops } from "./type";
import { horizontalScale, verticalScale } from "@utils/responsivenessHelper";

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
      backgroundStyle={{ backgroundColor: "#FFF" }}
      enablePanDownToClose
      style={{ paddingBottom: verticalScale(60), paddingHorizontal: horizontalScale(20) }}
    >
      <Sc.Container>
        <Sc.Title>{title}</Sc.Title>
        <Sc.Paragraph>{textContent}</Sc.Paragraph>
      </Sc.Container>
      <GenericButton onPress={onPress} state="accent">
        {buttonText}
      </GenericButton>
    </BottomSheet>
  );
}

export default Modal;
