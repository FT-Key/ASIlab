interface AdSenseProps {
  slot: string
  format?: string
  responsive?: boolean
  className?: string
}

export default function AdSense({ slot, format = 'auto', responsive = true, className = '' }: AdSenseProps) {
  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXXX'}
        data-ad-slot={slot}
        data-ad-format={responsive ? 'auto' : format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}
