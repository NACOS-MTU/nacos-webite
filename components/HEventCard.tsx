import Link from "next/link"
import {BsAwardFill} from "react-icons/bs"



type CardProps = {
    title: String
    uLink: String | any
    subTitle: String
    icon: any
}

// this is for the cards for the home screen events 
export default function HEventCard(props: CardProps) {
    return (
        <>

       
            <div
            className=" text-justify hover:cursor-pointer  hover:bg-green-700 ml-5 rounded-md "
           >
                <Link
                    href={props.uLink}
                >
                    <div
                    className="hover:text-white"
                    >
                        <div
                        className="bg-green-400 w-10 h-10 flex items-center px-3 mx-5"
                        >
                        {props.icon}
                        </div>
                    

                        <div

                            className=" text-black font-bold  text-lg pt-2  ">
                            {props.title}
                        </div>


                        <div
                            className="text-gray-600 text-sm pb-5"
                        >

                            {props.subTitle}
                        </div>
                    </div>


                </Link>

            </div>


        </>
    )
}