import ScheduleCard from "../../components/cards/ScheduleCard";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import NavButt from "../../components/navigations/NavButt";

export default function Schedule() {
    return (
        <DefaultLayout>
            <>
                <div className="flex justify-center items-center mx-5">
                    <div className="text-black text-center">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-green-800">SCHEDULE </h1>
                        <p className="mt-3 text-lg">This is a schedule for the upcoming hackathon</p>

                        <div className="mt-5 space-y-5 items-center justify-center">
                            <div className="flex items-center justify-center">
                                <NavButt uLink="https://forms.gle/PtkK5E6YXgbo2abv6" title="Register" />
                            </div>

                            <ScheduleCard time="9AM-12PM" title="INTRODUCTIONS" />

                            <ScheduleCard time="9AM-12PM" title="FINALS" />
                        </div>
                    </div>
                </div>
            </>
        </DefaultLayout>
    );
}
