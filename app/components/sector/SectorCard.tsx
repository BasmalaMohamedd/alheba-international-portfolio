import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  cover: StaticImageData | string
  alt: string
  title: string
  description: string
  href: string
}

const SectorCard = (props: Props) => {
  return (
    <div className="bg-brand-ice-blue-primary rounded-lg shadow-md p-6 flex flex-col items-start">
          <div className="w-full h-50 overflow-hidden mb-4">
            <Image
              src={props.cover}
              alt={props.alt}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{props.title}</h2>
          <p className="text-gray-600 text-center">
            {props.description}
          </p>
          <div className="mt-auto w-full flex justify-end">
            <Link href={props.href} className="mt-4 inline-block bg-brand-red-primary text-white px-4 py-2 rounded hover:bg-brand-red-secondary transition">
                Learn More
            </Link>
          </div>
          
        </div>
  )
}

export default SectorCard