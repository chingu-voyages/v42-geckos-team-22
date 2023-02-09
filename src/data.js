const dataJson = [
  {
    id: 1,
    gameType: "number", //use on homepage and nav for game type selection  "one" "two" "three" "four" "five" "six" "seven" "eight" "nine" "zero"
    games: [ 
      {
        img: "https://pixabay.com/images/id-149956/",
        name: "Number 6",
        options: ["eight", "two", "six"],
        correctAnswer: "six", //if this found in "options", user win
      },
      {
        img: "https://pixabay.com/images/id-6118485/",
        name: "Number 0",
        options: ["zero", "six", "seven"],
        correctAnswer: "zero",
      },
      {
        img: "https://pixabay.com/images/id-149952/",
        name: "Number 2",
        options: ["four", "two", "three"],
        correctAnswer: "two", //if this found in "options", user win
      },
      {
        img: "https://pixabay.com/images/id-149959/",
        name: "Number 9",
        options: ["four", "nine", "zero"],
        correctAnswer: "nine",
      },
      {
        img: "https://pixabay.com/images/id-149955/",
        name: "Number 5",
        options: ["five", "two", "eight"],
        correctAnswer: "five", //if this found in "options", user win
      },
      {
        img: "https://pixabay.com/images/id-149953/",
        name: "Number 3",
        options: ["four", "six", "three"],
        correctAnswer: "three",
      },
      {
        img: "https://pixabay.com/images/id-149951/",
        name: "Number 1",
        options: ["one", "zero", "nine"],
        correctAnswer: "one", //if this found in "options", user win
      },
      {
        img: "https://pixabay.com/images/id-149957/",
        name: "Number 7",
        options: ["nine", "zero", "seven"],
        correctAnswer: "seven",
      },{
        img: "https://pixabay.com/images/id-149954/",
        name: "Number 4",
        options: ["seven", "four", "nine"],
        correctAnswer: "four", //if this found in "options", user win
      },
      {
        img: "https://pixabay.com/images/id-149958/",
        name: "Number 8",
        options: ["five", "eight", "four"],
        correctAnswer: "eight",
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

export default dataJson;
