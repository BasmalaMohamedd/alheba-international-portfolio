import { ASSETS } from '@/assets/assets'
import SectorCard from '../components/sector/SectorCard'
import { useTranslations } from 'next-intl'

type Props = {}

const SectorsSection = (props: Props) => {
  const t = useTranslations("HomePage.sectors")
  return (
    <section id="sectors" className=" py-20 px-10 md:px-20">
      <h1 className="text-3xl font-bold text-gray-800">{t("explore our sectors")}</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <SectorCard cover={ASSETS.steelCover} alt="Steel Sector" title={t("steel exporting and importing")} description={t("steel description")} href="/steel" />
          <SectorCard cover={ASSETS.medicalCover} alt="Medical Equipment" title={t("medical equipment importing")} description={t("medical description")} href="/medical-equipment" />
        
      </div>

    </section>
  )
}

export default SectorsSection