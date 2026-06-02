const VerticalMarquee = () => {
  return (
    <aside className="hidden xl:block w-16 bg-background border-l border-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsla(0,0%,100%,0.03)_2px,hsla(0,0%,100%,0.03)_4px)]" />
      <div className="h-full w-full flex items-center justify-center">
        <div className="writing-vertical-lr whitespace-nowrap overflow-hidden h-[200%] relative">
          <div className="animate-marquee-v inline-block py-4">
            <span className="text-2xl font-bold text-stroke-primary tracking-widest">
              SYSTEM_SYNC_ACTIVE // PROTOCOL_ONLINE // DATA_STREAM_STABLE // SYSTEM_SYNC_ACTIVE // PROTOCOL_ONLINE // DATA_STREAM_STABLE //&nbsp;
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </aside>
  );
};

export default VerticalMarquee;
