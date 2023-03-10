import Head from 'next/head';
import { Container } from '@smartive-education/design-system-component-library-musketeers';

export default function PageHome() {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      <Container>
        <h1 className="heading-1 mt-xl">Settings page</h1>
      </Container>
    </>
  );
}
