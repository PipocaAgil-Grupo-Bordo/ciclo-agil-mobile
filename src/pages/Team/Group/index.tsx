import TeamData from "@constants/Team/team.json";
import { Sc } from "./group.style";
import Role from "../Role";

function Group() {
  return (
    <Sc.Grid>
      {TeamData.map((data, index) => (
        <Sc.Container isFirstRow={index < 2} key={index}>
          <Role role={data.role} members={data.members} />
        </Sc.Container>
      ))}
    </Sc.Grid>
  );
}
export default Group;
