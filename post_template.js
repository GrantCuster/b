import Post from '../components/post';
import Layout from '../layouts/main';
import Header from '../components/header';

let fs = 14;
let lh = 1.5;
let rlh = fs * lh;

export default function text() {
  return (
    <Layout>
      <Header rlh={rlh} />
      <Post post={content} rlh={rlh} />
      <div className="wrap" style={{ marginBottom: rlh * 2 }}>
        <a href="/">b.grantcuster.com</a>
      </div>
    </Layout>
  );
}
