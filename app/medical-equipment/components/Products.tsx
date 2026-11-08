import Image from 'next/image';
import React from 'react'


const products = [
    {
        id: "0",
        title: "Medical Tape",
        img: "/medical-equipment/medical-tape.jpeg"
    },
    {
        id: "1",
        title: "Alcohol",
        img: "/medical-equipment/alcohol70.jpeg"
    },
    {
        id:"2",
        title: "Medical Cap",
        img:"/medical-equipment/medical-cap.jpeg"
    },
    {
        id: "3",
        title: "Medical Shoe Cover",
        img: "/medical-equipment/shoes-cover.jpeg"
    },
    {
        id: "4",
        title: "Medical Gowns",
        img: "/medical-equipment/medical-gowns.jpeg"
    },
    {
        id:"5",
        title:"Medical Bed",
        img: "/medical-equipment/medical-bed.jpeg"
    },
    {
        id:"6",
        title: "Syringe",
        img: "/medical-equipment/syringe.jpeg"
    }
    ,
    {
        id: "7",
        title: "Pampers",
        img: "/medical-equipment/pampers.jpeg"
    },
    {
        id: "8",
        title: "VentMed Auto CPAP Machine",
        img: "/medical-equipment/vent-med.jpeg"
    },
    {
        id: "9",
        title: "MEdical Alternating Pressure Air Mattress",
        img: "/medical-equipment/air-mattress.jpeg"
    }

]

type Props = {}



const Products = (props: Props) => {
    const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'AlHeba International',
      description: 'Global supplier of certified medical equipment and healthcare solutions.',
      url: 'https://yourcompany.com',
      medicalSpecialty: ['Cardiology', 'Surgery', 'Hospital Equipment'],
    },
    {
      '@type': 'MedicalDevice',
      '@id': 'https://yourcompany.com/#surgical-gloves',
      name: 'Sterile Surgical Gloves',
      description: 'High-grade latex-free sterile surgical gloves meeting ISO 13485 standards.',
      purpose: 'Hand protection during surgical procedures',
      recognizingAuthority: {
        '@type': 'Organization',
        name: 'FDA / CE Certified',
      },
    },
  ],
};
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Products</h1>
        <p className="text-lg text-gray-600">
          Importing the best quality medical equipment from china to egypt.
        </p>
      </header>

      {/* Projects Feed */}
      <div className="space-y-16">
        {products.map((product) => (
          <article 
            key={product.id} 
            id={product.id}
            className="border z-0 border-gray-200 rounded-2xl p-6 shadow-sm scroll-mt-12"
          >
            <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
            {/* <p className="text-gray-600 mb-6">{product.description}</p> */}

            <div className="relative w-full h-[350px] rounded-xl overflow-hidden mb-6">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            
            
            

            
          </article>
        ))}
      </div>


    </main>
  );
  
}

export default Products