import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import { Gs } from "src/styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Modalprops } from "./type";
import { horizontalScale, verticalScale } from "@utils/responsivenessHelper";

const Modal: React.FC<Modalprops> = ({ setReadyToNext }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "50%"], []);
  const navigation = useNavigation<NavigationType>();
  const handleSheetChanges = useCallback((index: number) => {
    if (index == -1) setReadyToNext(false);
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
        <Gs.Title>Vamos lá!</Gs.Title>
        <Sc.Paragraph>
          Para um melhor uso do app precisamos que você responda algumas perguntas
        </Sc.Paragraph>
      </Sc.Container>
      <GenericButton onPress={() => navigation.navigate("LastPeriod")} state="accent">
        Vamos lá
      </GenericButton>
    </BottomSheet>
  );
};

export default Modal;
