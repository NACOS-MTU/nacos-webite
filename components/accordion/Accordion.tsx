import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type AccordionInput = {
    body: string;
    title: string;
};

const Accordion = ({ title, body }: AccordionInput) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div className="w-full">
            <button onClick={() => setIsOpen(!isOpen)} className="flex flex-row justify-between items-center w-full border-4 border-primary rounded-lg p-5 my-5">
                <h4 className="text-xl lg:text-2xl text-left font-semibold">{title}</h4>
                <div className="text-xl lg:text-2xl font-bold">
                    {isOpen && <FaChevronUp />}
                    {!isOpen && <FaChevronDown />}
                </div>
            </button>

            <p className={["lg:text-lg text-black p-5 bg-primary/50 rounded-lg", !isOpen && "hidden"].join(" ")}>{body}</p>
        </div>
    );
};

export default Accordion;
