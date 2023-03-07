import Link from "next/link";
import { BsAwardFill } from "react-icons/bs";

type CardProps = {
    title: String;
    uLink: String | any;
    subTitle: String;
    icon: any;
};

// this is for the cards for the home screen events
export default function HEventCard(props: CardProps) {
    return (
        <>
            <div className="text-justify hover:cursor-pointer ml-5 rounded-md hover:bg-primary/50 p-6">
                <Link href={props.uLink}>
                    <div className="">
                        <div className="bg-primary rounded-sm w-12 h-12 flex items-center px-3 mx-5 text-6xl">{props.icon}</div>

                        <div className="font-bold font-Sora text-black text-xl mt-3 mb-1">{props.title}</div>

                        <div className="text-gray-600 text-sm pb-5">{props.subTitle}</div>
                    </div>
                </Link>
            </div>
        </>
    );
}
