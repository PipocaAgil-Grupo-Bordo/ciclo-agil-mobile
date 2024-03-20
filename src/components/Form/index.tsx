import React from "react";
import { StyledContainer } from "./style";
import { FlatList } from "react-native";
import GenericInput from "../GenericInput";
import { FormInputsType } from "./type";
import { FormInterface } from "./type";

const Form: React.FC<FormInterface> = ({ formInputs, control, errors }) => {
  return (
    <StyledContainer>
      <FlatList<FormInputsType>
        data={formInputs}
        renderItem={({ item }) => (
          <GenericInput
            label={item.label}
            name={item.name}
            control={control}
            errors={errors}
            keyboardType={item.keyboard}
            autoComplete={item.autoComplete}
          />
        )}
      />
    </StyledContainer>
  );
};

export default Form;
