import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import { Gs } from "src/styles/globalStyles";
import { Modalprops } from "./type";
import { horizontalScale, verticalScale } from "@utils/responsivenessHelper";

const Modal: React.FC<Modalprops> = ({
  title,
  textContent,
  buttonText,
  onPress,
  setReadyToNext
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "50%"], []);

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
      style={{ paddingBottom: verticalScale(60), paddingHorizontal: horizontalScale(20) }}
    >
      <Sc.Container>
        <Gs.Title>{title}</Gs.Title>
        <Sc.Paragraph>{textContent}</Sc.Paragraph>
      </Sc.Container>
      <GenericButton onPress={onPress} state="accent">
        {buttonText}
      </GenericButton>
    </BottomSheet>
  );
};

export default Modal;
