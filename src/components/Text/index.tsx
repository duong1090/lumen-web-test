import { styled } from "styled-components";
import { TextProps } from "./type";
import { COLORS } from "constant";

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.size || 16}px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => props.color || COLORS.primary};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'auto')};
`;

export default Text;