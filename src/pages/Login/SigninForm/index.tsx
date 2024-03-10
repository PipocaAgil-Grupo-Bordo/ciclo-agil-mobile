import React from 'react';
import { ActivityIndicator, Alert, Text } from 'react-native';
import { ForgotPasswordText, FormBox, FormButton, LetsBegin, RegisterLink, RegisterText } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../schemas/loginSchema';
import { loginObject } from '../../../types/loginType';
import Input from '../../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios, { AxiosError, AxiosResponse } from 'axios';
import authApi from '../../../services/authApi';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../../types/routeType';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const SigninForm: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<loginObject>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: loginObject) => {
    try {
      await authApi.signInUser(data);

      reset({email: '', password: ''}, {keepErrors: false});
      
      return navigation.navigate('Home');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const invalidCredentials = error.response?.status === 401;

        if (invalidCredentials) {
          setError('email', { type: 'manual', message: '' });
          setError('password', { type: 'manual', message: 'E-mail ou Senha Incorretos. Tente Novamente.' });
        } else {
          Alert.alert('Algo deu errado, tente novamente!')
        }
      }
    }
  };

  return (
    <FormBox>
      <LetsBegin>Vamos começar?</LetsBegin>
      <Text style={{ fontFamily: "Montserrat" }}>Email:</Text>
      <Input name="email" control={control} errors={errors} />
      <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
      <Input name="password" control={control} errors={errors} />
      <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
        <ForgotPasswordText style={{ fontFamily: "Montserrat" }}>
          Esqueci a senha
        </ForgotPasswordText>
      </TouchableOpacity>
      <FormButton onPress={handleSubmit(onSubmit)}>
        {isSubmitting ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <Text style={{ fontFamily: "Montserrat", color: "white" }}>Login</Text>
        )}
      </FormButton>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <RegisterText >Não tem conta?<RegisterLink > Registre-se</RegisterLink></RegisterText>
      </TouchableOpacity>
    </FormBox>
  );
};

export default SigninForm;
