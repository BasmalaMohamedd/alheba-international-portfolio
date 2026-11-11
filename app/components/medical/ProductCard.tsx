import React from 'react';
import Image from 'next/image';

export interface ProductCardProps {
  title: string;
  description: string;
  img: string;
  alt: string;
}

const ProductCard = ({ title, description, img, alt }: ProductCardProps) => {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col justify-between overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-52 bg-gray-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-900 text-lg line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;