import React from 'react'

type Props = {}


const socialProofData = [
    {number:"1989", text: "Year Established", color:"brand-navy-primary"},
    {number:" 10+", text: "Primary Markets", color:"brand-red-primary"},
    {number:" 100%", text: "Quality Guaranteed", color:"brand-navy-primary"},
]

const SocialProofSection = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-center gap-10 m-5 md:my-8 md:mx-15 py-5 px-5  rounded-2xl bg-brand-ice-blue-primary">
        {socialProofData.map((item, index) => (
            <div key={index} className={`flex flex-col items-center justify-center gap-2 text-${item.color}`}>
                <h3 className="text-2xl md:text-4xl font-bold">{item.number}</h3>
                <p className="text-md md:text-lg font-bold text-center">{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default SocialProofSection