import Link from 'next/link';

function processStamp(stamp) {
  let year = stamp.slice(0, 4);
  let month = stamp.slice(4, 6);
  let day = stamp.slice(6, 8);
  let hour = stamp.slice(9, 11);
  let minute = stamp.slice(11, 13);
  let second = stamp.slice(13, 15);

  let date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return date.toLocaleString();
}

export default function({ post, rlh, index = false }) {
  return (
    <div style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div style={{ marginBottom: rlh }}>
          {index ? (
            <Link
              href={'/s/' + post.timestamp}
              as={'/' + post.timestamp + '.html'}
            >
              <a>{processStamp(post.timestamp)}</a>
            </Link>
          ) : (
            processStamp(post.timestamp)
          )}
        </div>
      </div>

      <div className={index ? 'image-wrap' : ''}>
        {post.files.map(file => (
          <img style={{ marginBottom: rlh }} src={'/' + file} />
        ))}
      </div>

      <div className="wrap" style={{ paddingBottom: rlh * 2 }}>
        <div style={{ marginBottom: 0 }}>{post.message}</div>
      </div>
    </div>
  );
}
