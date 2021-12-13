import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import { Section, Container } from '@components/global';
import Footer from '@sections/Footer';

const SubmitFailure = () => (
  <Layout>
    <Navbar />
    <Section>
    <Container>
      <h1 align="center">Sorry for wasting your time, we encounter some technical issues.</h1>
      <h2 align="center">Please try again later.</h2>
    </Container>
    </Section>
    <Footer />
  </Layout>
);

export default SubmitFailure;
