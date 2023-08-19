import { BackgroundIcon, ChevronRightIcon } from 'assets';
import { Progress, Text } from 'components';
import { COLORS } from 'constant';
import { styled } from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 416px;
  margin-bottom: 20px;
`;

const PlaceHolder = styled.div`
  background-color: ${COLORS.primary};
  height: 175px;
  margin-top: -1px;
`;

const CardContainer = styled.div`
  position: absolute;
  background-color: ${COLORS.grey09};
  width: calc(100vw - 40px);
  height: 100%;
  top: 0;
  left: 20px;
  right: 20px;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 12px 18px 0px rgba(23, 23, 37, 0.04);
`;

const CardInfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 22px;
`;

const CardTitle = styled.h1`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${COLORS.disable};
`;

const CardNumber = styled(Text)`
  font-size: 48px;
  color: ${COLORS.primary};
  margin-bottom: 20px;
`;

const CardDescription = styled(Text)`
  color: ${COLORS.grey04};
  margin-top: 30px;
`;

const LinkButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

const LinkText = styled(Text)`
  margin-right: 5px;
  color: ${COLORS.blue};
`;
const MyCouponButton = styled.a`
  padding: 15px;
  border-radius: 5px;
  margin-top: 30px;
  background-color: ${COLORS.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Date = styled(Text)`
  font-size: 14px;
  margin-top: 15px;
  color: ${COLORS.disable};
  text-align: center;
`;

const CouponCard = () => {
  return (
    <Container>
      <PlaceHolder />
      <CardContainer>
        <BackgroundIcon width='100%' height='95%' />
        <CardInfoContainer>
          <CardTitle>Available Coin balance</CardTitle>
          <CardNumber>340</CardNumber>
          <Progress percent={70} />
          <CardDescription>
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold
            Tier.
          </CardDescription>
          <LinkButton href='#'>
            <LinkText>View tier benefits</LinkText>
            <ChevronRightIcon  />
          </LinkButton>
          <MyCouponButton>
            <Text size={18} color={COLORS.white} bold>
              My Coupons
            </Text>
          </MyCouponButton>
          <Date>Updated: 02/11/2021</Date>
        </CardInfoContainer>
      </CardContainer>
    </Container>
  );
};

export default CouponCard;
