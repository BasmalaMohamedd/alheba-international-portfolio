import Link from 'next/link'
import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { Locale, useTranslations } from 'next-intl'



type Props = {
    setIsOpen: (isOpen: boolean) => void;

}


const NavMenu = ({setIsOpen}: Props) => {
    const t = useTranslations("HomePage.navbar");
    
  return (
    <ul className="flex flex-col items-start w-full">
            <Link className='w-full' href="/" scroll={false} onClick={() => setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">{t("home")}</span></li></Link>
            <Link className='w-full' href="/steel" scroll={false} onClick={() => setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">{t("steel sector")}</span></li></Link>
            <Link className='w-full' href="/medical-equipment" scroll={false} onClick={() => setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">{t("medical equipment sector")}</span></li></Link>
            <Link className='w-full' href="#about" scroll={true} onClick={() => setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">{t("about")}</span></li></Link>
            <Link className='w-full' href="#story" scroll={true} onClick={() => setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">{t("story")}</span></li></Link>
            <Link className='w-full' href="#contact" scroll={true} onClick={() => setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">{t("contact")}</span></li></Link>
            <li className=" w-full p-3">
                <div className="flex flex-row items-center mx-3 gap-10 font-medium">
                    <div>
                        {t("language")}
                    </div>
                    <LanguageSwitcher/>
                </div>
              
            </li>
          </ul>
  )
}

export default NavMenu