import React from 'react';
import { Link } from 'gatsby';

import Image from '@common/Image';
import { HeaderContainer } from '@components/global';

const Header = props => (
  <header>
    {/*<header style={{ padding: '3rem 0', marginTop: '5rem' }}></header>*/}
    <HeaderContainer>
      <div>
        <Image></Image>  
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ padding: '4rem', position: 'relative'}}>
          <h1>JobSearch</h1>
          <p>
            Where you meet your dream job.
          </p>
        </div>
      </div>
    </HeaderContainer>
  </header>
);

export default Header;
