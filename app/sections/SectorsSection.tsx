import { ASSETS } from '@/assets/assets'
import SectorCard from '../components/sector/SectorCard'
import { useTranslations } from 'next-intl'

type Props = {}

const SectorsSection = (props: Props) => {
  const t = useTranslations("HomePage.sectors")
  return (
    <section id="sectors" className="py-16 md:py-20 px-6 sm:px-8 lg:px-12">
      <h2 className="max-w-7xl mx-auto text-3xl font-bold text-gray-800">{t("explore our sectors")}</h2>
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <SectorCard cover={ASSETS.steelCover} alt="Steel Sector" title={t("steel exporting and importing")} description={t("steel description")} href="/steel" />
          <SectorCard cover={ASSETS.medicalCover} alt="Medical Equipment" title={t("medical equipment importing")} description={t("medical description")} href="/medical-equipment" />
        
      </div>

    </section>
  )
}

export default SectorsSection
