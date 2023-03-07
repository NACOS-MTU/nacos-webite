import { BsTelephoneFill } from 'react-icons/bs'
import { HiMailOpen } from 'react-icons/hi'
import NavButt from '../../navigations/NavButt'


// this is for the hero section on the home page
export default function HeroSection() {
    return (
        <>




            <div className="flex justify-center items-center min-h-screen w-full bg-heroBg bg-black/60 bg-blend-overlay">

                <div className="text-white text-center">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">LOCAL PROBLEMS GLOBAL SOLUTIONS </h1>
                    <p className="mt-3 text-lg">JULY 2023</p>

                    <div className="flex justify-center items-center space-x-4 px-4 py-2 text-white">
                        <NavButt
                        title="Schedule"
                        uLink="/Hackathon/Schedule"
                        />
                        <NavButt
                        uLink="https://forms.gle/PtkK5E6YXgbo2abv6"
                        title="Register"
                        />
                    </div>
                </div>



            </div>






        </>
    )
}