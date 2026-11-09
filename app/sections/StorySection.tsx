import Image from 'next/image'
import React from 'react'

type Props = {}

const StorySection = (props: Props) => {
  return (
    <section id="story" className="py-20 px-10 md:px-20">
      <h1 className="text-3xl font-bold text-gray-800">Our Story</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center">
          <Image src="/EngIsmail.jpeg" alt="Our Story" width={400} height={300} className="rounded-lg shadow-md bg-cover w-80 h-100" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Eng. Ismail A. Aly</h3>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            The journey of Al-Heba begins with the vision of Eng. Ismail Ahmed Aly. Having served as the General Manager for one of the largest iron and metal companies in the Kingdom of Saudi Arabia, he brought a wealth of experience to his own venture. In the mid-1980s, the concept of exporting Egyptian iron products abroad took hold, leading to the formal establishment of Al-Heba International Trading and Marketing EST. in 1989.            </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our initial business focused on exporting iron products to the Kingdom of Saudi Arabia. We quickly expanded, entering the Jordanian market, and within two years, we were exporting to the Emirates and Kuwait, positioning ourselves as a leading exporting company in Egypt and the region. Our growth trajectory continued as we became agents for major Arabian firms and factories, broadening our reach to Sudan, Yemen, Libya, Turkey, and Tunisia. Over more than a quarter of a century, this expansion has solidifed Al-Heba as a respected name in the Arab iron market. In 2004, we diversified our operations further by entering the field of importing iron products, carefully selecting high-quality international factories to ensure our continued distinction in the industry.          </p>
        </div>
        
      </div>
    </section>
  )
}

export default StorySection