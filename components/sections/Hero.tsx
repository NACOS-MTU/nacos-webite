import { BsTelephoneFill } from 'react-icons/bs'
import { HiMailOpen } from 'react-icons/hi'
import NavBar from '../navigations/NavBar'

// this is for the hero section on the home page
export default function HeroSection() {
    return (
        <>
          
              


                <div className="flex justify-center items-center min-h-screen w-full bg-heroBg bg-black/60 bg-blend-overlay">

                    <div className="text-white text-center">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">This content is centered both horizontally and vertically</h1>
                        <p className="mt-3 text-lg">This content is centered both horizontally and vertically</p>
                    </div>
                    
                </div>
          



            <div className="bg-black">
                <div className="flex space-x-4 px-4 py-2 text-white">
                    <div className="flex items-center space-x-2">
                        <BsTelephoneFill />
                        <p>+234 703 380 0000</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <HiMailOpen />
                        <p>info@nacos.com</p>
                    </div>
                </div>
            </div>

        </>
    )
}