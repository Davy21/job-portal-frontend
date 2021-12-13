import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { Link } from 'gatsby';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  LogoContainer,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  LogoName,
  LogoLink
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';
import { ReactComponent as MenuCloseIcon } from '@static/icons/x.svg';

//const NAV_ITEMS = ['Job', 'About', 'FAQ'];
const NAV_ITEMS = [];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <LogoContainer aria-label="JobSearch Logo">
            <LogoName><LogoLink to="/">JobSearch</LogoLink></LogoName>
          </LogoContainer>
        </StyledContainer>
      </Nav>
    );
  }
}

export default Navbar;
