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
      <details className="" key={item.id}>
        <summary className="">{item.question}</summary>
        {item.answer}
      </details>
    );
  });

  return (
    <div className="p-5">
      <h2 className="text-7xl font-extrabold">FAQ</h2>
      {content}
    </div>
  );
}

export default FAQ;
