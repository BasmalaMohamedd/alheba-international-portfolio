import { steelProducts } from '@/app/data/steelProducts'
import React from 'react'
import SteelCard from './SteelCard'
import { useTranslations } from 'next-intl'

type Props = {}

const Steel = (props: Props) => {
      const t = useTranslations("SteelProducts.products")
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {steelProducts.map((product) => (
        <SteelCard 
        key={product.id} 
        title={t(`${product.id}.name`)} 
        description={t(`${product.id}.description`)} 
        img={product.imagePath} 
        alt={product.name + " image"} 
        hsCode={product.hsCode} 
        categoryLabel={t(`${product.id}.categoryLabel`)}
        highlights={t.raw(`${product.id}.highlights`)}
        />
       ))}
     </div>
  )
}

export default Steel