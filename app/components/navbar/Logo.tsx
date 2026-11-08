import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  const t = useTranslations("HomePage.navbar")
  return (
    <div className="flex items-center gap-0.5 md:gap-2">
        <Image
          src={`/${t("logo")}`}
          alt="AlHeba logo"
          width={70}
          height={70}
        />
        <span className="text-2xl md:text-3xl font-bold text-brand-navy-primary">
          <span className="text-brand-red-primary">{t("alheba")}</span> {t("international")}
        </span>
    </div>
  )
}

export default Logo