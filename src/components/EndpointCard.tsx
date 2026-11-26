export function EndpointCard({ endpoint }: { endpoint: string }) {
  return (
    <div className="endpoint-grid">
      <div className="endpoint-inputs">
        <code>{endpoint}</code>
      </div>
    </div>
  )
}
