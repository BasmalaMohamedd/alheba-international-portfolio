import Link from 'next/link'
import React from 'react'

type Props = {
    setIsOpen: (isOpen: boolean) => void
}


const NavMenu = (props: Props) => {
  return (
    <ul className="flex flex-col items-start w-full">
            <Link className='w-full' href="/" scroll={false} onClick={() => props.setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">Home</span></li></Link>
            <Link className='w-full' href="/steel" scroll={false} onClick={() => props.setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">Steel Sector</span></li></Link>
            <Link className='w-full' href="/medical-equipment" scroll={false} onClick={() => props.setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">Medical Equipment Sector</span></li></Link>
            <Link className='w-full' href="#about" scroll={true} onClick={() => props.setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">About</span></li></Link>
            <Link className='w-full' href="#story" scroll={true} onClick={() => props.setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">Story</span></li></Link>
            <Link className='w-full' href="#contact" scroll={true} onClick={() => props.setIsOpen(false)}><li className="hover:bg-brand-navy-primary hover:text-white w-full p-3"><span className="mx-3">Contact</span></li></Link>
            <li className=" w-full p-3">
                <div className="flex flex-row items-center mx-3 gap-10 font-medium">
                    <div>
                        Language
                    </div>
                    <button
                        className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 bg-brand-red-primary text-white hover:bg-brand-red-secondary mx-3 cursor-pointer">
                        AR
                    </button>
                </div>
              
            </li>
          </ul>
  )
}

export default NavMenu