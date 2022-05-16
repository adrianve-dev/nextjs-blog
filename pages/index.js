import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, this is a sample website built using Next.js.</p>
        <p>Other things I've learned include:</p>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Typescript</li>
          <li>GraphQL</li>
          <li>Solidity</li>
          <li>web.js</li>
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

export default Home