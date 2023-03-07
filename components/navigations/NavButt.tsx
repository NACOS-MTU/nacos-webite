import Link from "next/link"


type ButtProps = {
    title: String;
    uLink: any | String
}






export default function NavButt(props: ButtProps) {
    return (



        <div className="flex items-center font-bold text-xl text-white  rounded-md">
            <Link
                href={props.uLink}
            >
                <button className='bg-green-800  max-h-fit  h-[60px] w-[100px]  rounded-sm '>
                    {props.title}
                </button>

            </Link>


        </div>


    )
}