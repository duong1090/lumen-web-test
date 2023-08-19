import { COLORS } from "constant";
import { FC } from "react";
import { styled } from "styled-components";

const Line = styled.div`
  height: 6px;
  border-radius: 8px;
  background-color: ${COLORS.grey};
`

const Active = styled.div<{percent: number}>`
  height: 100%;
  width: ${props => props.percent}%;
  border-radius: 8px;
  background-color: ${COLORS.blue};
`;

const Progress: FC<{percent: number}> = (props) => {
  return <Line>
    <Active percent={props.percent}/>
  </Line>
}

export default Progress;