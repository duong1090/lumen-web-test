import { HomeIcon, JobIcon, NotificationIcon, PersonIcon } from 'assets';
import { COLORS } from 'constant';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top: 4px solid ${COLORS.grey};
  background-color: ${COLORS.white};
  z-index: 1;
`;

const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomTab = () => {
  return (
    <StyledNav>
      <StyledLink to='/' >
        <HomeIcon />
      </StyledLink>
      <StyledLink to='/about' >
        <NotificationIcon />
      </StyledLink>
      <StyledLink to='/about'>
        <JobIcon />
      </StyledLink>
      <StyledLink to='/about'>
        <PersonIcon />
      </StyledLink>
    </StyledNav>
  );
};

export default BottomTab;
