import { handleLinking } from "@utils/linkingHelper";
import { Sc } from "./role.style";
import { RoleProps } from "./role.type";

function Role({ role, members }: RoleProps) {
  return (
    <Sc.Container>
      <Sc.Title>{role}</Sc.Title>

      <Sc.Members>
        {members.map((member, index) => {
          // Ensure the names and surnames are not on the same line
          const [firstName, ...rest] = member.name.split(" ");
          const lastName = rest.join(" ");

          return (
            <Sc.Div key={index}>
              <Sc.Photo source={require(`@images/integrantsPhotos/Luciano_Lima.png`)} />

              <Sc.NameWrapper onPress={() => handleLinking(member.linkedIn)}>
                <Sc.Name>{firstName}</Sc.Name>
                <Sc.Name>{lastName}</Sc.Name>
              </Sc.NameWrapper>
            </Sc.Div>
          );
        })}
      </Sc.Members>
    </Sc.Container>
  );
}
export default Role;
