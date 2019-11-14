import Post from '../../components/post';
import Layout from '../../layouts/main';
import Header from '../../components/header';
import Head from 'next/head';
import Link from 'next/link';

let fs = 14;
let lh = 1.5;
let rlh = fs * lh;

export default function postPage() {
  return (
    <Layout>
      <Head>
        <title>b. {content.timestamp}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header rlh={rlh} />
      <Post post={content} rlh={rlh} />
      <div className="wrap" style={{ marginBottom: rlh * 2 }}>
        <Link href="/">
          <a>s.gracus.codes</a>
        </Link>
      </div>
    </Layout>
  );
}

let content = {
  "timestamp": "20191114-161536Z",
  "message": "Gracus",
  "tweet_intent": "true",
  "toot_intent": "true",
  "files": []
};