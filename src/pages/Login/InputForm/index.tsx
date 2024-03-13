import { TextInputProps } from "react-native";
import { loginObject } from "../../../types/loginType";
import { Control, useController } from "react-hook-form";
import { ErrorMessage, InputBox, InputStylesProps, InputWrapper } from "./style";

interface InputFormProps extends InputStylesProps, TextInputProps {
  control: Control<loginObject>;
}

const InputForm: React.FC<InputFormProps> = ({ control, name, errors }) => {
  const { field } = useController({ control, defaultValue: "", name });

  return (
    <InputWrapper>
      <InputBox
        value={field.value}
        onChangeText={field.onChange}
        name={name}
        errors={errors}
        secureTextEntry={name === "password" && true}
        textAlign="center"
      />
      <ErrorMessage>{errors && errors[`${name}`] && errors[`${name}`]?.message}</ErrorMessage>
    </InputWrapper>
  );
};

export default InputForm;
