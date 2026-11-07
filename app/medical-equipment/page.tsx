import React from 'react'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Medical Equipment',
  description: 'Medical Equipment page description',
}

const MedicalEquipmentPage: React.FC = () => {
  return (
    <div>
      <h1>Medical Equipment</h1>
      <section>
        <h3>Our Products</h3>
        <p>At Alheba, We aim to bring to egypt the best qualities of medical equipment from china</p>
        <div>
          
        </div>
      </section>
    </div>
  )
}

export default MedicalEquipmentPage
