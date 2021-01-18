import React from 'react';
import { NavItem } from './NavItem';
import styled from 'styled-components';
import logo from './images/logo.svg';
import { useAppContext } from './context';
import { FaBars } from 'react-icons/fa';
import { NavModal } from './NavModal';

const Navbar = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { links } = useAppContext();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const setWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', setWidth);

    return () => window.removeEventListener('resize', setWidth);
  }, []);

  if (showModal) return <NavModal hideModal={() => setShowModal(false)} />;

  return (
    <NavContainer>
      <LogoImage src={logo} alt='logo' />
      {windowWidth > 600 ? (
        <>
          <LinksContainer>
            {links.map((item) => {
              return <NavItem key={item.page} item={item} />;
            })}
          </LinksContainer>
          <SignInButton>
            <ButtonText>Sign In</ButtonText>
          </SignInButton>
        </>
      ) : (
        <FaBars onClick={() => setShowModal(true)} color='white' size={34} />
      )}
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
`;

const LogoImage = styled.img`
  object-fit: cover;
`;

const LinksContainer = styled.ul`
  display: flex;
`;

const SignInButton = styled.button`
  background: #fff;
  color: #222;
  padding: 10px;
`;

const ButtonText = styled.h4``;
