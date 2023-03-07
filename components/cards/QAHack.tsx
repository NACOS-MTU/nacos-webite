type ballprops = {
    title: String;
    subT: String;
};

export default function QAHack(props: ballprops) {
    return (
        <div className="bg-green-800 rounded-xl justify-center">
            <div className="text-white font-bold ">{props.title}</div>
            <div className=" font-semibold ">{props.subT}</div>
        </div>
    );
}
