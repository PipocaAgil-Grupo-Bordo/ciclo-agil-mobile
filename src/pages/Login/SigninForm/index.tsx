import React from 'react';
import { Alert, Text } from 'react-native';
import { ForgotPasswordText, FormBox, FormButton, LetsBegin, RegisterLink, RegisterText } from './style';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../schemas/loginSchema';
import { loginObject } from '../../../types/loginType';
import Input from '../../../components/Input';
import authApi from '../../../services/authApi';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const SigninForm: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm<loginObject>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: loginObject) => {
    try {
      const response = await authApi.signInUser(data);
      console.log(response.status);

      if (response.status === 201) {
        return navigation.navigate('Home');
      }
    } catch (error: unknown) {
      console.error('Error signing in:', error);
    }
  };

  const onDeniedSubmit: SubmitErrorHandler<loginObject> = ({
    email,
    password,
  }) => {
    reset({ email: "", password: "" }, { keepErrors: true });
    setError("root", { type: "submit error" });
    Alert.alert("deu erro");
  };

  return (
    <FormBox>
      <LetsBegin>Vamos começar?</LetsBegin>
      <Text style={{ fontFamily: "Montserrat" }}>Email:</Text>
      <Input name="email" control={control} errors={errors} />
      <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
      <Input name="password" control={control} errors={errors} />
      <ForgotPasswordText style={{ fontFamily: "Montserrat" }}>
        Esqueci a senha
      </ForgotPasswordText>
      <FormButton onPress={handleSubmit(onSubmit, onDeniedSubmit)}>
        <Text style={{ fontFamily: "Montserrat", color: "white" }}>Login</Text>
      </FormButton>
      <RegisterText >Não tem conta?<RegisterLink > Registre-se</RegisterLink></RegisterText>
    </FormBox>
  );
};

export default SigninForm;
