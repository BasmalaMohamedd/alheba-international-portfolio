import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutSection = (props: Props) => {
  return (
    <section id="about" className="py-20 px-10 md:px-20 bg-brand-navy-primary">
      <h1 className="text-3xl font-bold text-white">About AlHeba International</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Established in 1989, Al-Heba International Trading and Marketing EST. is a distinguished name in the iron and metal trade field across Egypt and the Middle East. With origins rooted in deep industry experience, we are dedicated to both the importation and exportation of high-quality iron products. Our extensive network allows us to act as agents for some of the most prominent Arabian companies and factories,  facilitating trade throughout the Arab world and beyond, including markets in Saudi Arabia, Jordan, Emirates, Kuwait, Sudan, Yemen, Libya, Turkey, and Tunisia. We pride ourselves on selecting international factories of the highest standards to maintain our reputation for excellence and uniqueness in the market.          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/logo-ar.png" alt="About AlHeba International" width={400} height={300} className="rounded-lg shadow-md bg-brand-gray-primary bg-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection