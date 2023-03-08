export default function Prizes() {
    const prizes = [
        { position: "1", sub: "st", prize: "NGN 250,000" },
        { position: "2", sub: "nd", prize: "NGN 150,000" },
        { position: "3", sub: "rd", prize: "NGN 100,000" }
    ];

    return (
        <div className="mt-16 mx-12">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Prizes</h1>
                <p className="mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
                {prizes.map((prize, index) => (
                    <div key={index} className="bg-primary/50 w-full p-10 rounded-lg">
                        <h4 className="font-Sora text-lg font-bold uppercase">
                            <span className="text-7xl md:text-8xl lg:text-9xl">{prize.position}</span> {prize.sub}
                        </h4>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl mt-5 tracking-wide">{prize.prize}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
