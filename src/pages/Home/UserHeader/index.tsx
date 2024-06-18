import { WhoAmI } from "@type/auth";
import { Sc } from "./style";
import Feather from "react-native-vector-icons/Feather";

interface UserHeaderProps {
  whoAmI: WhoAmI | undefined;
}

function UserHeader({ whoAmI }: UserHeaderProps) {
  return (
    <Sc.Container>
      <Sc.UserWrapper>
        <Sc.ImageContainer>
          {/* <Sc.Image src="https://github.com/LucianoDLima.png" /> */}
        </Sc.ImageContainer>

        <Sc.Text>Olá, {whoAmI?.name}</Sc.Text>
      </Sc.UserWrapper>

      <Sc.SettingsWrapper>
        <Feather size={20} name="settings" color={"#414347"} />
        <Feather size={20} name="bell" color={"#414347"} />
      </Sc.SettingsWrapper>
    </Sc.Container>
  );
}

export default UserHeader;
