import { Text } from "react-native";

import { Sc } from "./style";

function NonImplementedFeature() {
  return (
    <Sc.Container>
      <Sc.Title>
        <Text>OPS!</Text>
      </Sc.Title>
      <Sc.Text>
        <Text>Esta funcionalidade está sendo desenvolvida!</Text>
      </Sc.Text>
    </Sc.Container>
  );
}

export default NonImplementedFeature;
