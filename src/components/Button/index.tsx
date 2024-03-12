import { ImageSourcePropType } from 'react-native';
import {
  ButtonIcon,
  ButtonStyleProps,
  ButtonText,
  StyledButton,
} from './style';
import { TouchableOpacityProps } from 'react-native-gesture-handler';
import { ReactNode } from 'react';

interface ButtonProps extends ButtonStyleProps, TouchableOpacityProps{
  children: ReactNode;
  icon?: ImageSourcePropType;
}

/**
 * Generic button to ensure style consistency across components
 * 
 * It adds the style of all current button designs that take up the whole screen's width.
 * 
 * If you need to add spacing between this button and another element, you can wrap it around with
 * a View component and style that instead.
 * 
 * If you need to add an image, do so what the icon prop:
 * icon={require('@/assets/image.format')}
 */
const Button: React.FC<ButtonProps> = ({ icon, state, children, ...rest }) => {
  return (
    <StyledButton state={state} {...rest}>
      {icon && <ButtonIcon source={icon} />}
      <ButtonText state={state}>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
