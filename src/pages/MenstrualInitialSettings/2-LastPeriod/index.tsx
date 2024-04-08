import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Sc } from "./style";
import Header from "./Header";
import DatePicker from "./DatePicker";

const LastPeriod: React.FC = () => {
  return (
    <Sc.Container>
      <Header />

      <DatePicker />
    </Sc.Container>
  );
};

export default LastPeriod;
