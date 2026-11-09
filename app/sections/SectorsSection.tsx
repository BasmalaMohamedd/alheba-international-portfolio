import { ASSETS } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SectorCard from '../components/sector/SectorCard'

type Props = {}

const SectorsSection = (props: Props) => {
  return (
    <section id="sectors" className=" py-20 px-10 md:px-20">
      <h1 className="text-3xl font-bold text-gray-800">Explore our Sectors</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <SectorCard cover={ASSETS.steelCover} alt="Steel Sector" title="Steel Exporting" description="Discover our high-quality steel products and services." href="/steel" />
          <SectorCard cover={ASSETS.medicalCover} alt="Medical Equipment" title="Medical Equipment Importing" description="Discover our high-quality medical equipment products, brought from china." href="/medical" />
        
      </div>

    </section>
  )
}

export default SectorsSection