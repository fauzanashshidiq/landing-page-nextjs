import Image from "next/image";

export default function CtaSection() {
  const portfolioItems = Array.from({ length: 6 }).map((_, index) => ({
    id: index,
    src: "/illustration.png",
    title: "Daily App",
    subtitle: "Increasing your productivity",
  }));

  return (
    <section className="bg-white text-[#1F1F39]">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12">
          <div className="md:w-1/3">
            <p className="text-gray-500 text-sm tracking-wide pt-4.5">
              Our Portfolio
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-4xl">
              We envision a world where every idea, product, or service is
              brought to life through exceptional design.
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className="w-full">
                  <div className="relative w-full h-64 overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={item.src}
                      alt={`${item.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      priority={item.id < 2}
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-700">
                    <span className="font-semibold">{item.title}</span> -{" "}
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
