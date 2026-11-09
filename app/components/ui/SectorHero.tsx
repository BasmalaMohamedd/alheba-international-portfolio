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
      className="relative md:h-screen min-h-160 w-full
      bg-cover bg-center bg-no-repeat
      flex items-center"
    >
      {/* Dark overlay */}
      <div className="absolute z-0 inset-0 bg-linear-to-r from-[#111827]/90 via-[#111827]/65 to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 px-10 md:px-15 text-white max-w-3xl">
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