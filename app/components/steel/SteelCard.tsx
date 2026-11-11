import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
  img: string;
  alt: string;
  hsCode: string;
  categoryLabel: string;
  highlights: string[];
}

const SteelCard = ({
  title, 
  description, 
  img, 
  alt, 
  hsCode, 
  categoryLabel,
  highlights
}: Props) => {
  const t = useTranslations("SteelProducts.products");
  
  return (
    <article className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-sm flex flex-col justify-between overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-56 bg-slate-50 rounded-xl overflow-hidden mb-5 flex items-center justify-center border border-gray-100">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4"
        />
        {/* HS Code Badge */}
        <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm text-brand-ice-blue-primary border border-brand-ice-blue-primary-500/30 px-3 py-1 rounded-md text-[11px] font-mono font-semibold">
          HS: {hsCode}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-white bg-brand-red-primary px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {categoryLabel}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 text-xl tracking-tight line-clamp-1">
          {title}
        </h3>
        
        <p className="text-[15px] text-gray-600 mt-2 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Highlights List */}
        <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-4">
          {highlights.map((item, i) => (
            <li key={i} className="flex items-start text-sm text-slate-700 font-medium gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-navy-secondary shrink-0 mt-2" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SteelCard;