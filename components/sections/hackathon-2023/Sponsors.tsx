import Image from "next/image";

import logo from "../../../public/logo.svg";

export default function Sponsors() {
    const sponsors = [
        { name: "NACOS", logo },
        { name: "NACOS", logo },
        { name: "NACOS", logo }
    ];

    return (
        <div className="mt-16 mx-12">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Sponsors</h1>
                <p className="mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="break-words p-6">
                        <div className="flex justify-center w-full">
                            <div className="w-3/4">
                                <Image src={sponsor.logo} alt={sponsor.name} />
                            </div>
                        </div>
                        <div className="font-Sora font-bold text-center text-2xl mt-5">{sponsor.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
