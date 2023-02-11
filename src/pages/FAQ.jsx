import React from "react";
import faqVector from "../assets/faqPage/faqVector.svg";
import faqVector1 from "../assets/faqPage/faqVector1.svg";

function FAQ() {
  //Update questions and answers here:
  const faqData = [
    {
      id: 1,
      question: "Who are the team behind Flashy?",
      answer:
        "There are 4 team members who built Flashy: Elliot, Eric, Danney, and Angela. Brought together by Chingu, we were officially known as Geckos Team 22.",
    },
    {
      id: 2,
      question: "What was the purpose of this project?",
      answer:
        "This project was part of Chingu Voyage 42. After brainstorming some ideas, we decided together to create a fun app for children to help improve literacy. This was a project that was both meaningful and achievable in the given 6-week timeframe. ",
    },
    {
      id: 3,
      question: "What tech stack was used?",
      answer:
        "In this project, we used a combination of: React, Redux Toolkit, React Router, Tailwind, Firebase, and Vite.",
    },
    {
      id: 4,
      question: "What was the inspiration for the website design?",
      answer:
        "The target audience for Flashy is children, so we needed strong, bright, fun colors. To keep the style modern, we implemented a brutalism design.",
    },
  ];

  const content = faqData.map((item) => {
    return (
      <div key={item.id} className="background--shadow mx-auto md:w-11/12">
        <details className="mt-5 mb-5 rounded-lg p-2 text-gray-500 outline outline-2 outline-black hover:bg-gray-200 md:mt-0 md:mb-14 md:p-10">
          <summary className="cursor-pointer text-dark-grey">
            {item.question}
          </summary>
          {item.answer}
        </details>
      </div>
    );
  });

  return (
    <div className="relative h-screen p-5 md:p-0">
      <div className="lg:translate-y-30 absolute hidden h-40 w-5 translate-y-20 bg-purple md:block lg:h-60 lg:w-8"></div>
      <div className="absolute right-0 -z-20 hidden h-40 w-4/6 bg-light-orange md:block lg:h-60">
        <img
          className="absolute left-44 w-28 lg:left-96 lg:w-40"
          src={faqVector}
          alt="faq vector"
        />
        <img
          className="absolute right-0 -bottom-14 w-44 lg:-bottom-20 lg:w-60"
          src={faqVector1}
          alt="faq vector"
        />
      </div>
      <section className="pb-12 md:pt-16 md:pb-24">
        <h2 className="text-7xl font-extrabold md:hidden">FAQ</h2>
        <span className="hidden text-7xl font-extrabold md:block md:pl-14 md:pb-6 lg:pl-32 lg:text-9xl">
          Frequently
        </span>
        <span className="hidden pl-36 text-5xl font-light md:block lg:pl-72 lg:pt-8 lg:text-7xl">
          asked questions
        </span>
      </section>
      {content}
    </div>
  );
}

export default FAQ;
