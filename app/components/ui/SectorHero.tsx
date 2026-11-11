'use client';

type Props = {
  cover: string;
  title: string;
  description: string;
};

const SectorHero = ({ cover, title, description }: Props) => {
  return (
    <section
      style={{ backgroundImage: `url("${cover}")` }}
      className="relative min-h-[calc(100svh-4rem)] w-full
      bg-cover bg-center bg-no-repeat
      flex items-center"
    >
      {/* Dark overlay */}
      <div className="absolute z-0 inset-0 bg-linear-to-r rtl:bg-linear-to-l from-brand-overlay/90 via-brand-overlay/65 to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>

        <p className="text-lg md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default SectorHero;
