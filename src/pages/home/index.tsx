import { styled } from 'styled-components';
import CouponCard from './CouponCard';
import Header from './Header';
import { COLORS } from 'constant';
import List from './List';

const DUMMY_DATA = [
  {
    name: 'Petrol',
    data: [
      {
        coin: 15,
        name: '15 Coins',
        description:
          '50% discount for every $100 top-up on your Shell Petrol Card',
        thumbnail: require('../../assets/images/thumb1.svg').default,
      },
      {
        coin: 1000,
        name: '1000 Coins',
        description: '70% discount top-up on your Shell Petrol Card',
        thumbnail: require('../../assets/images/thumb2.svg').default,
      },
      {
        coin: 15,
        name: '15 Coins',
        description:
          '50% discount for every $100 top-up on your Shell Petrol Card',
        thumbnail: require('../../assets/images/thumb1.svg').default,
      },
      {
        coin: 1000,
        name: '1000 Coins',
        description: '70% discount top-up on your Shell Petrol Card',
        thumbnail: require('../../assets/images/thumb2.svg').default,
      },
    ],
  },
  {
    name: 'Rental Rebate',
    data: [
      {
        coin: 20,
        name: '20 Coins',
        description: 'Get $20 Rental rebate',
        thumbnail: require('../../assets/images/thumb3.svg').default,
      },
      {
        coin: 15,
        name: '15 Coins',
        description: 'Get $500 Rental rebate',
        thumbnail: require('../../assets/images/thumb4.svg').default,
      },
      {
        coin: 20,
        name: '20 Coins',
        description: 'Get $20 Rental rebate',
        thumbnail: require('../../assets/images/thumb3.svg').default,
      },
      {
        coin: 15,
        name: '15 Coins',
        description: 'Get $500 Rental rebate',
        thumbnail: require('../../assets/images/thumb4.svg').default,
      },
    ],
  },
  {
    name: 'Food and Beverage',
    data: [
      {
        coin: 25,
        name: '25 Coins',
        description: 'NTUC Fairprice $50 Voucher',
        thumbnail: require('../../assets/images/thumb5.svg').default,
      },
      {
        coin: 5,
        name: '5 Coins',
        description: 'Free Cold Stone Sundae at any flavour!',
        thumbnail: require('../../assets/images/thumb6.svg').default,
      },
      {
        coin: 25,
        name: '25 Coins',
        description: 'NTUC Fairprice $50 Voucher',
        thumbnail: require('../../assets/images/thumb5.svg').default,
      },
      {
        coin: 5,
        name: '5 Coins',
        description: 'Free Cold Stone Sundae at any flavour!',
        thumbnail: require('../../assets/images/thumb6.svg').default,
      },
    ],
  },
];

const Container = styled.div`
  height: calc(100vh - 100px);
  width: 100vw;
  background-color: ${COLORS.background};
  overflow-y: scroll;
  padding-bottom: 50px;
`;

const HomePage = () => {
  return (
    <Container>
      <Header />
      <CouponCard />
      <div style={{position: 'relative'}}>
        {DUMMY_DATA.map((i, index) => (
          <List key={index} title={i.name} data={i.data} />
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
