import Link from "next/link";
import { useState } from "react";












export default function NavBar() {



    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };




    return (
        <>
            <nav className='flex items-center flex-wrap bg-green-500 p-3 sticky top-0 z-50 '>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>



                        <img
                            src="/logo.svg"
                            alt="Logo"
                            className="w-20"
                        />

                    </a>
                </Link>

                <button
                    className=' inline-flex p-3 hover:primaryColour rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >

                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'

                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>




                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-green-500 '>
                                Home
                            </a>
                        </Link>


                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-green-500 '>
                                Home
                            </a>
                        </Link>

                       



                    </div>
                </div>
            </nav>



        </>
    )
}