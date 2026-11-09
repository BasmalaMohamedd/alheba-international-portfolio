import React, { Suspense } from 'react'

import { Metadata } from 'next'
import SectorHero from '../components/ui/SectorHero'

export const metadata: Metadata = {
  title: 'Steel',
  description: 'Steel page description',
}
const SteelPage: React.FC = () => {
  return (
    <Suspense>
      <div>

      <SectorHero 
      cover={"steel-cover.png"} 
      title={"Iron and Steel Exporting and Importing"}
      description={""} 
      />
    </div>
    </Suspense>
    
  )
}

export default SteelPage