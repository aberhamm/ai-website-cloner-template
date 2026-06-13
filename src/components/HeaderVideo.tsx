export function HeaderVideo() {
  return (
    <section className="relative -mt-24 z-10 flex justify-center px-4">
      <div
        className="relative w-full max-w-[700px]"
        style={{
          background:
            "radial-gradient(117.54% 92.5% at 50% 150%, rgba(255,255,255,0.97) 9.51%, rgba(242,244,247,0.47) 100%)",
        }}
      >
        <div className="relative mx-auto w-full max-w-[340px]">
          {/* Video fills the phone screen area */}
          <video
            className="relative z-0 mx-auto block w-full rounded-[36px]"
            src="/videos/mymind/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* iPhone frame overlay */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mymind/iphone-video-mockup.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
