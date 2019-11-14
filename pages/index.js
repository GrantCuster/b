import React from 'react';
import Head from 'next/head';
import posts from '../posts.js';
import Layout from '../layouts/main';
import Post from '../components/post';
import Header from '../components/header';

let fs = 14;
let lh = 1.5;
let rlh = fs * lh;

const Home = () => (
  <div>
    <Head>
      <title>b.grantcuster.com</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Header rlh={rlh} index={true} />
      {posts.map(post => (
        <Post post={post} rlh={rlh} index={true} />
      ))}
    </Layout>
  </div>
);

export default Home;
