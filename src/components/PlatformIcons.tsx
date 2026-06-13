interface PlatformItem {
  icon: string;
  width: number;
  height: number;
  name: string;
  action: string;
}

const PLATFORMS: PlatformItem[] = [
  {
    icon: "/images/mymind/icons/Astore.svg",
    width: 48,
    height: 48,
    name: "iOS",
    action: "GET APP",
  },
  {
    icon: "/images/mymind/icons/PStore.svg",
    width: 44,
    height: 48,
    name: "Android",
    action: "GET APP",
  },
  {
    icon: "/images/mymind/icons/Google-Chrome.svg",
    width: 48,
    height: 48,
    name: "Chrome",
    action: "INSTALL",
  },
  {
    icon: "/images/mymind/icons/Explorer.svg",
    width: 48,
    height: 48,
    name: "Edge",
    action: "INSTALL",
  },
  {
    icon: "/images/mymind/icons/Safari.svg",
    width: 48,
    height: 48,
    name: "Safari",
    action: "INSTALL",
  },
];

export function PlatformIcons() {
  return (
    <section className="w-full bg-white px-4 py-10">
      <div className="mx-auto flex max-w-[600px] flex-wrap items-start justify-center gap-8">
        {PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href="#"
            className="flex flex-col items-center gap-1.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={platform.icon}
              alt={platform.name}
              width={platform.width}
              height={platform.height}
              className="mb-1"
            />
            <span
              className="font-semibold text-black"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
              }}
            >
              {platform.name}
            </span>
            <span
              className="uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                letterSpacing: "1.5px",
                color: "#FF5924",
              }}
            >
              {platform.action}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
