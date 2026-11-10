import React from 'react'

import { Metadata } from 'next'
import SectorHero from '../components/ui/SectorHero'
import MedicalProducts from '../components/medical/MedicalProducts'

export const metadata: Metadata = {
  title: 'Medical Equipment',
  description: 'Medical Equipment page description',
}

const MedicalEquipmentPage: React.FC = () => {
  return (
    <div>
      <SectorHero
      cover={"/medical-cover.jpeg"} 
      title={"Medical Equipment Importing"}
      description={"Explore our range of medical equipment imported from china to enhance healthcare delivery and patient care."} 
      />
      <MedicalProducts />
      
    </div>
  )
}

export default MedicalEquipmentPage
