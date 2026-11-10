import React from 'react'

import { Metadata } from 'next'
import SectorHero from '../components/ui/SectorHero'
import MedicalProducts from '../components/medical/MedicalProducts'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Medical Equipment',
  description: 'Medical Equipment page description',
}

const MedicalEquipmentPage: React.FC = () => {
  const t = useTranslations("MedicalEquipment.hero")
  return (
    <div>
      <SectorHero
      cover={"/medical-cover.jpeg"} 
      title={t("title")}
      description={t("description")} 
      />
      <MedicalProducts />
      
    </div>
  )
}

export default MedicalEquipmentPage
