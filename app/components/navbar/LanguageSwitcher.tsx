'use client'

import { changeLocaleAction } from '@/app/actions'
import { Locale, useLocale } from 'next-intl'
import React from 'react'

type Props = {
}

const LanguageSwitcher = (props: Props) => {
  const locale = useLocale();
  
  return (
    <div>
        
        <button
        onClick={()=> changeLocaleAction(locale === 'en'? 'ar': 'en')}
            className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 bg-brand-red-primary text-white hover:bg-brand-red-secondary mx-3 cursor-pointer">
                {locale === 'en'? 'ar': 'en'}
        </button>
        
        
    </div>
  )
}

export default LanguageSwitcher