const MarqueeStrip = () => {
  return (
    <div className="w-full overflow-hidden border-y border-primary/20 bg-background/80 py-2">
      <div className="flex whitespace-nowrap">
        <div className="marquee-horizontal flex gap-8 text-xs font-mono text-primary/40 uppercase tracking-widest">
          <span>◆ SYSTEM_ONLINE</span>
          <span>◆ THREAT_LEVEL: LOW</span>
          <span>◆ ALL_MODULES_OPERATIONAL</span>
          <span>◆ FIREWALL: ACTIVE</span>
          <span>◆ PROTOCOL_CRIMSON_ENGAGED</span>
          <span>◆ DATA_INTEGRITY: VERIFIED</span>
          <span>◆ NEURAL_LINK: STABLE</span>
          <span>◆ ENCRYPTION: AES-256</span>
          {/* Duplicate for seamless loop */}
          <span>◆ SYSTEM_ONLINE</span>
          <span>◆ THREAT_LEVEL: LOW</span>
          <span>◆ ALL_MODULES_OPERATIONAL</span>
          <span>◆ FIREWALL: ACTIVE</span>
          <span>◆ PROTOCOL_CRIMSON_ENGAGED</span>
          <span>◆ DATA_INTEGRITY: VERIFIED</span>
          <span>◆ NEURAL_LINK: STABLE</span>
          <span>◆ ENCRYPTION: AES-256</span>
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
