import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import { Section, Container } from '@components/global';
import Footer from '@sections/Footer';

const SubmitSuccess = () => (
  <Layout>
    <Navbar />
    <Section>
    <Container>
      <h1 align="center">Thank you for your submission</h1>
      <h2 align="center">We will get back to you in a short while</h2>
    </Container>
    </Section>
    <Footer />
  </Layout>
);

export default SubmitSuccess;
