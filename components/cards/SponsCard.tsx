type cardProps = {
    logo: any;
    title: String
    sub: String
}




export default function SponsCard(props: cardProps) {
    return (
        <div
            className=" justify-center bg-green-800 items-center  rounded-lg"
        >
            <div>

                <img
                src={props.logo}
                className="w-10  mx-auto pt-2"
                />
               
            </div>


            <div
            className="font-bold text-white text-xl"
            >
                {props.title}
            </div>

            <div
            className="text-lg pb-2 mx-2 "
            >
                {props.sub}
            </div>
        </div>
    )
}