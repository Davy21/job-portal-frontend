import styled from 'styled-components';
import { Link } from 'gatsby'
import { Container } from '@components/global';

export const Nav = styled.nav`
  padding: 1rem 0;
  background-color: ${props => props.theme.color.black.dark};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  text-transform: uppercase;

  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.color.white.regular};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  background: ${props => props.theme.color.black.dark};
`;

export const LogoContainer = styled.div`
  max-height: 64px;

  svg {
    width: 100%;
  }
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;

export const LogoName = styled.h1`
    color: #ffffff;
`;

export const LogoLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
      color: #ffffff;
    }
`;