import Image from "next/image";

const socials = [
  {
    label: "Whatsapp",
    href: "#",
    bgColor: "bg-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Website",
    href: "https://www.techsuitesystems.com",
    bgColor: "bg-[#2563eb]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm3.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    label: "Phone Number",
    href: "tel:#",
    bgColor: "bg-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:#",
    bgColor: "bg-[#2563eb]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-r-87a1b9118/",
    bgColor: "bg-[#0A66C2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-200 font-sans">
      <div className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col rounded-2xl bg-white pt-0 pb-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:max-w-[480px] sm:pb-8">
        {/* Profile card – image full width, defines page width */}
        <div className="relative w-full">
          <div className="relative aspect-[4/3] max-h-[800px] w-full overflow-hidden rounded-t-2xl bg-zinc-200 sm:max-h-[880px]">
            {/* Placeholder: replace src with your profile image */}
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&h=360&q=85&fit=crop"
              alt="Rahul Ramakrishnan"
              fill
              className="object-contain object-center"
              sizes="(max-width: 480px) 100vw, 480px"
              priority
            />
            {/* Connct logo overlapping top-left */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 drop-shadow-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb] text-lg font-bold text-white shadow-md">
                C
              </div>
              <span className="text-xl font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">Connct</span>
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* Name & title on image */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4">
              <div>
                <h1 className="text-xl font-bold leading-tight text-white drop-shadow-sm sm:text-2xl">
                  Rahul Ramakrishnan
                </h1>
                <p className="text-sm font-medium text-white/95 sm:text-base">
                  SAP Delivery Head
                </p>
                <p className="text-sm text-white/90">Techsuite Systems Consulting</p>
              </div>
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/60 bg-white/95 shadow-md sm:h-24 sm:w-24">
                <Image
                  src="/assets/images/Logo.png"
                  alt="Logo"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-4 px-4 text-center text-base font-medium text-zinc-800 sm:px-6">
          Empowering Transformation.
        </p>

        {/* Action buttons */}
        <div className="mt-4 flex w-full gap-2 px-4 sm:px-6">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#2563eb] px-3 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-[#1d4ed8]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
            </svg>
            Exchange
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#2563eb] px-3 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-[#1d4ed8]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            Save Contact
          </button>
        </div>

        {/* Socials */}
        <section className="mt-6 w-full px-4 pb-8 sm:px-6">
          <div className="mx-auto grid max-w-lg grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center gap-1 transition opacity-90 hover:opacity-100"
              >
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-white shadow-sm transition group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-xl ${item.bgColor}`}
                >
                  {item.icon}
                </span>
                <span className="text-center text-[10px] font-medium text-zinc-800 sm:text-xs">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
