import Image from 'next/image'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="flex items-center gap-0.5 md:gap-2">
        <Image
          src="/logo-en.png"
          alt="AlHeba logo"
          width={70}
          height={70}
        />
        <span className="text-2xl md:text-3xl font-bold text-brand-navy-primary">
          <span className="text-brand-red-primary">AlHeba</span> International
        </span>
    </div>
  )
}

export default Logo