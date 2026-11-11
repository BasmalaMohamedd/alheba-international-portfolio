
import { Metadata } from 'next'
import SectorHero from '../components/ui/SectorHero'
import Steel from '../components/steel/Steel'
import { useTranslations } from 'next-intl'
import BilletSpecsTable from '../components/steel/BilletSpecsTable'
import RebarMechanicalSpecsTable from '../components/steel/RebarMechanicalSpecsTable'
import Image from 'next/image'
import { ASSETS } from '@/assets/assets'
import RebarChemicalSpecsTable from '../components/steel/RebarChemicalSpecsTable'

export const metadata: Metadata = {
  title: 'Steel',
  description: 'Steel page description',
}
const SteelPage: React.FC = () => {
  const t = useTranslations("SteelProducts");
  return (
      <div>

      <SectorHero 
      cover={"steel-cover.png"} 
      title={t("header")}
      description={t("description")} 
      />
      <Steel />

      {/* <SteelSpecsTable /> */}

      {/* 4. Deep-Dive Grade & Chemical Tables */}
      <div className="py-12 m-3 border-gray-100 mt-16">
          <h3 className='text-3xl font-bold text-brand-red-primary'>{t("products.section-title")}</h3> 
          <section id='rebar-specs-tabls' className='m-5'>
            
              <RebarMechanicalSpecsTable />
              <RebarChemicalSpecsTable />

          </section>       
          
          <BilletSpecsTable />
      </div>
    </div>
    
  )
}

export default SteelPage