import { BackIcon } from "assets";
import { COLORS } from "constant";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: ${COLORS.primary};
  padding: 15px;
  padding-bottom: 40px;

`
const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 12px;
  color: ${COLORS.white};
`

const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: ${COLORS.disable};
`;

const Header = () => {
  return (
    <Container>
      <BackIcon />
      <Title>Silver Tier</Title>
      <Description>
        In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
        exclusive rewards.
      </Description>
    </Container>
  );
}

export default Header;