import React from "react";

function FAQ() {
  //Update questions and answers here:
  const faqData = [
    {
      id: 1,
      question: "At vero eos et accusamus et iusto odio dignissimos?",
      answer:
        "Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti occaecati cupiditate nonquos dolores et quas molestias excepturi sint.",
    },
    {
      id: 2,
      question: "Consequatur aut perferendis doloribus asperiores repellat?",
      answer:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint ut aut reiciendis voluptatibus maiores alias.",
    },
    {
      id: 3,
      question: "Sed ut perspiciatis unde omnis iste natus error?",
      answer:
        "Toluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
    },
  ];

  const content = faqData.map((item) => {
    return (
      <>
        <div className="background--shadow">
          <details
            className="mt-5 mb-5 cursor-pointer rounded-lg p-2 text-gray-500 outline outline-2 outline-black hover:bg-gray-200 md:mt-0 md:mb-14 md:p-10"
            key={item.id}
          >
            <summary className="text-dark-grey">{item.question}</summary>
            {item.answer}
          </details>
        </div>
      </>
    );
  });

  return (
    <div className="relative p-5 md:p-0">
      <div className="lg:translate-y-30 absolute hidden h-40 w-5 translate-y-20 bg-purple md:block lg:h-60 lg:w-8"></div>
      <div className="absolute right-0 -z-20 hidden h-40 w-4/6 bg-light-orange md:block lg:h-60">
        <img
          className="absolute left-44 w-28 lg:left-96 lg:w-40"
          src="src/assets/faqVector.svg"
          alt="faq vector"
        />
        <img
          className="absolute right-0 -bottom-14 w-44 lg:-bottom-20 lg:w-60"
          src="src/assets/faqVector1.svg"
          alt="faq vector"
        />
      </div>
      <section className="md:pt-16 md:pb-16">
        <h2 className="text-7xl font-extrabold md:hidden">FAQ</h2>
        <span className="hidden text-7xl font-extrabold md:block md:pl-14 md:pb-6 lg:pl-32 lg:text-9xl">
          Frequently
        </span>
        <span className="hidden pl-36 text-5xl font-light md:block lg:pl-72 lg:pt-8 lg:text-7xl">
          asked question
        </span>
      </section>
      {content}
    </div>
  );
}

export default FAQ;
