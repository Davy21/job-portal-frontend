import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'what is COVID-19 and what are the symptoms to look out for?',
    content: () => (
      <>
        Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. According to the Ministry of Health, the symptoms of COVID-19 infection are similar to that of regular pneumonia. Typical symptoms include fever, cough and shortness of breath.
      </>
    ),
  },
  {
    title: 'what is the latest travel advice?',
    content: () => (
      <>
        From 18 March 2020 0000 hours to 14 April 2020, 2359 hours, all Malaysians are prohibited from leaving the country. Those who return from overseas will have to go through health checks and go on a 14-day self-quarantine. Foreign visitors, including tourists, will also not be allowed to enter Malaysia during this period. This is subjected to extension.
      </>
    ),
  },
  {
    title: 'how is JobSearch managing technology?',
    content: () => (
      <>
        We continue to assess and test our technology infrastructure, and are confident that we will maintain service levels as they are.

        Our senior leadership team will closely monitor the situation in all client accounts. This ensures that our teams remain agile and can be a significant resource in providing guidance on facilitating work from home arrangements, video interviewing services, virtual recruiting platforms, etc. to keep your business moving ahead during this disruption.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq" accent>
    <Container>
      <h1 style={{ marginBottom: '3rem' }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <span key={title}>
            <FaqItem title={title}>
              {content()}
            </FaqItem>
          </span>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
