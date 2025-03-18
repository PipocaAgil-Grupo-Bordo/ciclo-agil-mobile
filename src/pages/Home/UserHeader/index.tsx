import { WhoAmI } from "@type/auth";
import { Text } from "react-native";

import { Sc } from "./style";

interface UserHeaderProps {
  whoAmI: WhoAmI | undefined;
}

function UserHeader({ whoAmI }: UserHeaderProps) {
  const getFirstName = (fullName: string | undefined) => {
    if (!fullName) return "";
    return fullName.split(" ")[0];
  };

  return (
    <Sc.Container>
      <Sc.UserWrapper>
        <Sc.ImageContainer>
          {/* <Sc.Image src="https://github.com/LucianoDLima.png" /> */}
        </Sc.ImageContainer>

        <Sc.TextContainer>
          <Sc.Text numberOfLines={1} ellipsizeMode="tail">
            <Text>Olá, {getFirstName(whoAmI?.name)}</Text>
          </Sc.Text>
        </Sc.TextContainer>
      </Sc.UserWrapper>

      {/* <Sc.SettingsWrapper>
        <Feather size={20} name="settings" color={ColorScheme.icon.idle} />
        <Feather size={20} name="bell" color={ColorScheme.icon.idle} />
      </Sc.SettingsWrapper> */}
    </Sc.Container>
  );
}

export default UserHeader;
