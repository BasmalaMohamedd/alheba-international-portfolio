import { medicalProducts } from '@/app/data/medicalProducts';
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import React from 'react'
import ProductCard from './ProductCard';

type Props = {}




const MedicalProducts = (props: Props) => {
    const t = useTranslations("MedicalEquipment.products");
  return (
    <section id="medical-products" className='m-5'>
    <h3 className='text-3xl font-bold text-brand-red-primary'>{t("section-title")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-5">
      {medicalProducts.map((product) => (
        
          <ProductCard 
          key={product.id}
          title={t(`${product.id}.title`)} 
          description={t(`${product.id}.description`)}
          img={product.img} 
          alt={product.alt}
          />
          
      ))}
    </div>
    </section>
    
  )
}

export default MedicalProducts