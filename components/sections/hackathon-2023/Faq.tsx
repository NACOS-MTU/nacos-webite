import { BsTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import Accordion from "../../accordion/Accordion";

// this is for the hero section on the home page
export default function Faq() {
    const faqs = [
        {
            question: "What is a hackathon?",
            answer: "A hackathon is a 24-hour event where students come together to create a project from scratch. The goal is to create a project that solves a problem in the community."
        },
        {
            question: "What is are the topics under consideration",
            answer: "Participants must provide solutions for one of more of the following topics, Fintech, Civic-tech, Ed-tech, Healthcare"
        },
        // {
        //     question: "What is a hackathon?",
        //     answer: "A hackathon is a 24-hour event where students come together to create a project from scratch. The goal is to create a project that solves a problem in the community."
        // },
        // {
        //     question: "What is a hackathon?",
        //     answer: "A hackathon is a 24-hour event where students come together to create a project from scratch. The goal is to create a project that solves a problem in the community."
        // },
        // {
        //     question: "What is a hackathon?",
        //     answer: "A hackathon is a 24-hour event where students come together to create a project from scratch. The goal is to create a project that solves a problem in the community."
        // },
        // {
        //     question: "What is a hackathon?",
        //     answer: "A hackathon is a 24-hour event where students come together to create a project from scratch. The goal is to create a project that solves a problem in the community."
        // }
    ];

    return (
        <div className="mx-12 mt-16 mb-10">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Frequently Asked Questions</h1>
            </div>

            <div className="mt-10">
                {faqs.map((faq, index) => (
                    <Accordion key={index} title={faq.question} body={faq.answer} />
                ))}
            </div>
        </div>
    );
}
