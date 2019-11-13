export default function({ rlh, index = false }) {
  return (
    <div className="wrap">
      {index ? (
        <div
          style={{
            marginTop: rlh,
            marginBottom: rlh,
          }}
        >
          <div>Status updates:</div>
        </div>
      ) : (
        <div style={{ height: rlh }} />
      )}
    </div>
  );
}
