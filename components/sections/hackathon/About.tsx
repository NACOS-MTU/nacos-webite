import QAHack from "../../cards/QAHack";

export default function About() {
    return (
        <div className="flex justify-center items-center mx-5">
            <div className="text-black text-center">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-green-800">About </h1>
                <p className="mt-3 text-lg">isonvsuvbvnovnwuvwvjwinownovw slvnsvonvnuvwnvmwiwnwinwnwbvvnosvuavua snovaovuav</p>

                <div className="grid grid-cols-5 space-x-2 space-y-4 mt-5 items-center">
                    <div className="col-span-5 lg:col-span-1 space-x-2">
                        <QAHack
                            title="WHAT"
                            subT="information soiaSVNSVUWVHVWVWVUOWVWIOVWVUW VW
                            SVNVOWINVWVNWVWPWKNVWVI
                            WOVNWVIWVNWPVNW0VWVPVWWIw"
                        />
                    </div>

                    <div className="col-span-5 lg:col-span-1 space-x-2">
                        <QAHack title="WHEN" subT="information soiaw" />
                    </div>

                    <div className="col-span-5 lg:col-span-1 space-x-2">
                        <QAHack title="WHO" subT="information soiINVUAVJ AH KJB HB J VEHV w" />
                    </div>

                    <div className="col-span-5 lg:col-span-1 space-x-2">
                        <QAHack title="WHY" subT="information soiaw" />
                    </div>

                    <div className="col-span-5 lg:col-span-1 space-x-2">
                        <QAHack title="WHERE" subT="information soiaw" />
                    </div>
                </div>
            </div>
        </div>
    );
}
