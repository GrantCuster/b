import Link from 'next/link';

export default function({ rlh, index = false }) {
  return (
    <div className="wrap">
      <div style={{ marginTop: rlh, marginBottom: rlh * 2 }}>
        {index ? (
          'Status reports:'
        ) : (
          <Link href="/">
            <a>Status reports</a>
          </Link>
        )}
      </div>
    </div>
  );
}
