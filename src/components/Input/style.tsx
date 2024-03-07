import { FieldErrors } from 'react-hook-form';
import styled from 'styled-components/native';

export const LoginInput = styled.TextInput<{ errors?: FieldErrors; name: string }>`
  background-color: #f5f9ff;
  border-radius: 5px;
  height: 56px;
  margin: 12px 0px;
  border: ${(props) => (props.errors && props.errors[props.name] ? '#FF0000' : '')};
`;

export const ErrorMessage = styled.Text`
  color: #FF0000;
  font-size: 14px;
`