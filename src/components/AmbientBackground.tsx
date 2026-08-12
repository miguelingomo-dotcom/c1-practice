export function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div
        className="ambient-blob animate-blob-move"
        style={{
          width: 520,
          height: 520,
          top: '-10%',
          left: '-8%',
          background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)',
        }}
      />
      <div
        className="ambient-blob animate-blob-move-slow"
        style={{
          width: 480,
          height: 480,
          top: '10%',
          right: '-10%',
          background: 'radial-gradient(circle, #5EEAD4 0%, transparent 70%)',
        }}
      />
      <div
        className="ambient-blob animate-blob-move"
        style={{
          width: 420,
          height: 420,
          bottom: '-12%',
          left: '20%',
          background: 'radial-gradient(circle, #FDA4AF 0%, transparent 70%)',
          animationDelay: '-8s',
        }}
      />
    </div>
  );
}
