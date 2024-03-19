import styled from "styled-components/native";
import { StyledTextProps, TextAlign } from "./type";
import { ColorType, SizeType } from "../../types/globalStyle";

export const StyledText = styled.Text<StyledTextProps>`
  font-family: "Montserrat";
  font-size: ${({ size }) => handleFontSizes(size!)};
  color: ${({ color }) => handleColor(color!)};
  text-align: ${({ align }) => handleTextAlign(align!)};
`;

const handleFontSizes = (size: SizeType) => {
  switch (size) {
    case "xs":
      return "12px";
    case "sm":
      return "14px";
    case "base":
      return "16px";
    case "lg":
      return "18px";
    case "xl":
      return "20px";
    case "2xl":
      return "24px";
    case "3xl":
      return "32px";
    default:
      return "16px";
  }
};

const handleColor = (color: ColorType) => {
  switch (color) {
    case "primary--100":
      return "#F4EBFA";
    case "primary--200":
      return "#EEE1F7";
    case "primary--300":
      return "#DCC1EE";
    case "primary--400":
      return "#C691EB";
    case "primary--500":
      return "#8E37C9";
    case "primary--600":
      return "#722CA1";
    case "primary--700":
      return "#6B2997";
    case "primary--750":
      return "#552179";
    case "primary--800":
      return "#40195A";
    case "primary--900":
      return "#321346";

    case "secondary--100":
      return "#F4F7E1";
    case "secondary--200":
      return "#E8EEC1";
    case "secondary--300":
      return "#D5DF94";
    case "secondary--500":
      return "#B5C936";
    case "secondary--600":
      return "#889729";
    case "secondary--700":
      return "#515A18";

    case "tertiary--100":
      return "#ECEBFA";
    case "tertiary--200":
      return "#E2E1F7";
    case "tertiary--300":
      return "#C3C1EE";
    case "tertiary--500":
      return "#3E36C9";
    case "tertiary--600":
      return "#2F2997";
    case "tertiary--700":
      return "#1C185A";

    case "warning--100":
      return "#FAF4EB";
    case "warning--200":
      return "#F4E3C3";
    case "warning--300":
      return "#E9CE9F";
    case "warning--500":
      return "#C99436";
    case "warning--600":
      return "#976F29";
    case "warning--700":
      return "#5A4318";

    case "success--100":
      return "#E6FFE5";
    case "success--200":
      return "#BAFFB9";
    case "success--300":
      return "#74E172";
    case "success--500":
      return "#29B126";
    case "success--600":
      return "#038600";
    case "success--700":
      return "#013D00";

    case "danger--100":
      return "#FFEBEB";
    case "danger--200":
      return "#FFB0B0";
    case "danger--300":
      return "#FF7171";
    case "danger--500":
      return "#FF0000";
    case "danger--600":
      return "#CA0000";
    case "danger--700":
      return "#850000";

    case "other--100":
      return "#EBFAFA";
    case "other--200":
      return "#E1F7F7";
    case "other--300":
      return "#C1EEEE";
    case "other--500":
      return "#36C9C9";
    case "other--600":
      return "#299797";
    case "other--700":
      return "#134646";

    case "neutral-gray--white":
      return "#FFFFFF";
    case "neutral-gray--background":
      return "#FAFCFF";
    case "neutral-gray--100":
      return "#EFF1F6";
    case "neutral-gray--200":
      return "#E2E4E9";
    case "neutral-gray--300":
      return "#D9D9D9";
    case "neutral-gray--400":
      return "#C7CACF";
    case "neutral-gray--500":
      return "#AFB4BD";
    case "neutral-gray--600":
      return "#8B8F98";
    case "neutral-gray--700":
      return "#61656F";
    case "neutral-gray--800":
      return "#414347";
    case "neutral-gray--black":
      return "#000000";

    case "neutral-blue--50":
      return "#F5F9FF";
    case "neutral-blue--100":
      return "#F2F7FF";
    case "neutral-blue--150":
      return "#EEF3FC";
    case "neutral-blue--200":
      return "#E7ECF4";
    case "neutral-blue--300":
      return "#D7DDE9";
    case "neutral-blue--400":
      return "#BDCBEB";
    case "neutral-blue--500":
      return "#7D93C5";
    case "neutral-blue--550":
      return "#6E7DA0";
    case "neutral-blue--600":
      return "#4E586F";
    case "neutral-blue--700":
      return "#323743";
    case "neutral-blue--800":
      return "#2D3139";
    case "neutral-blue--900":
    default:
      return "#1F2024";
  }
};

const handleTextAlign = (align: TextAlign) => {
  switch (align) {
    case "center":
      return "center";
    case "right":
      return "right";
    case "left":
    default:
      return "left";
  }
};
