import { Text } from 'components';
import { FC } from 'react';
import { styled } from 'styled-components';
import { ListProps } from './type';
import { COLORS } from 'constant';

const PADDING_LEFT = 20;
const CARD_WIDTH = 200;
const CARD_HEIGHT = 240;

const Container = styled.div`
  padding-top: ${PADDING_LEFT}px;
  width: 100%;
`;

const Title = styled(Text)`
  font-size: 18px;
  margin-left: ${PADDING_LEFT}px;
`;

const Row = styled.div`
  width: 100%;
  padding: 20px 20px 20px 0;
  overflow-x: scroll;
  white-space: nowrap;
`;

const CardItem = styled.a`
  display: inline-block;
  margin-left: ${PADDING_LEFT}px;
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: 10px;
  border: 2px solid #f1f1f5;
  overflow: hidden;
  box-shadow: 0px 12px 18px 0px #1717250a;
`;

const Thumbnail = styled.img`
  width: ${CARD_WIDTH}px;
  height: 98px;
  object-fit: cover;
`;

const ItemInfoContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const ItemDescription = styled.p`
  font-size: 16px;
  margin-top: 10px;
  white-space: break-spaces;
  color: ${COLORS.disable};
`;

const List: FC<ListProps> = (props) => {
  const { title, data } = props;

  return (
    <Container>
      <Title bold>
        {title}
      </Title>
      <Row>
        {data.map((i, index) => (
          <CardItem>
            <Thumbnail src={i.thumbnail} />
            <ItemInfoContainer>
              <Text color={COLORS.blue} bold>
                {i.name}
              </Text>
              <ItemDescription>{i.description}</ItemDescription>
            </ItemInfoContainer>
          </CardItem>
        ))}
      </Row>
    </Container>
  );
};

export default List;
