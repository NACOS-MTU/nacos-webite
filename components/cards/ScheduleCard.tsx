
type Crda={
    time: string
    title: string
}



export default function ScheduleCard(props: Crda){
    return (
        <div
            className=" justify-center bg-green-800 items-center  rounded-lg"
        >
            <div
            className="text-black font-extrabold text-lg"
            >

                
                {props.time}
               
               
            </div>


            <div
            className="font-bold text-white text-xl"
            >
                {props.title}
            </div>

           
        </div>
    )
}