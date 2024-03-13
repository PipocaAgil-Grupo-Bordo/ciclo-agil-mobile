import React from 'react';
import { ActivityIndicator, Alert, TouchableHighlight } from 'react-native';
import {
  ForgotPasswordText,
  FormBox,
  LetsBegin,
  LoginWrapper,
  RegisterLink,
  RegisterText,
} from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../schemas/loginSchema';
import { loginObject } from '../../../types/loginType';
import Input from '../../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import authApi from '../../../services/authApi';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../../types/routeType';
import TextBox from '../../../components/TextBox';
import GenericButton from '../../../components/GenericButton';

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
          setError('password', {
            type: 'manual',
            message: 'E-mail ou Senha Incorretos. Tente Novamente.',
          });
        } else {
          Alert.alert('Algo deu errado, tente novamente!');
        }
      }
    }
  };

  return (
    <FormBox>
      <LetsBegin>Vamos começar?</LetsBegin>
      <TextBox>Email:</TextBox>
      <Input name="email" keyboardType='email-address' control={control} errors={errors} />
      <TextBox>Senha:</TextBox>
      <Input name="password" control={control} errors={errors} />
      <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
        <ForgotPasswordText>
          Esqueci a senha
        </ForgotPasswordText>
      </TouchableOpacity>
      <LoginWrapper>
        <GenericButton state='accent' onPress={handleSubmit(onSubmit)}>
          {isSubmitting ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
              'Login'
          )}
        </GenericButton>
      </LoginWrapper>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <RegisterText >Não tem conta?<RegisterLink > Registre-se</RegisterLink></RegisterText>
      </TouchableOpacity>
    </FormBox>
  );
};

export default SigninForm;
