
const dataJson = [
  {
    id: 1,
    gameType: "number", //use on homepage and nav for game type selection
    games: [
      {
        img: "https://www.freepnglogos.com/uploads/1-number-png/cartoon-1-number-five-for-friday-time-beach-sand-3.png",
        name: "Number 1",
        options: ["one", "two", "three"],
        correctAnswer: "one", //if this found in "options", user win
      },
      {
        img: "https://e7.pngegg.com/pngimages/277/128/png-clipart-number-numerical-digit-mathematics-counting-multiplication-number-2-child-numerical-digit-thumbnail.png",
        name: "Number 2",
        options: ["one", "two", "three"],
        correctAnswer: "two",
      },
    ],
  },
  {
    id: 2,
    gameType: "shape", //use on homepage and nav for game type selection
    games: [
      {
        img: "..\\..\\src\\assets\\Shapes\\Circle.png",
        name: "Circle",
        options: ["Circle", "Square", "Triangle"],
        correctAnswer: "Circle", //if this found in "options", user win
      },
      {
        img: "..\\..\\src\\assets\\Shapes\\Oval.png",
        name: "Oval",
        options: ["Circle", "Oval", "Triangle"],
        correctAnswer: "Oval", //if this found in "options", user win
      },
      {
        img: "..\\..\\src\\assets\\Shapes\\Square.png",
        name: "Square",
        options: ["Circle", "Square", "Triangle"],
        correctAnswer: "Square", //if this found in "options", user win
      },
      {
        img: "..\\..\\src\\assets\\Shapes\\Triangle.png",
        name: "Triangle",
        options: ["Oval", "Square", "Triangle"],
        correctAnswer: "Triangle", //if this found in "options", user win
      },
    ],
  },
  {
    id: 3,
    gameType: "color", //use on homepage and nav for game type selection
    games: [
      {
        img: "colors coming soon",
        name: "green",
        options: ["red", "blue", "green"],
        correctAnswer: "green", //if this found in "options", user win
      },
    ],
  },
  {
    id: 4,
    gameType: "letter", //use on homepage and nav for game type selection
    games: [
      {
        img: "letters coming soon",
        name: "a",
        options: ["A", "B", "C"],
        correctAnswer: "A", //if this found in "options", user win
      },
    ],
  },
];

export default dataJson
