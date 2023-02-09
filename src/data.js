const dataJson = [
  {
    id: 1,
    gameType: "number", //use on homepage and nav for game type selection  "one" "two" "three" "four" "five" "six" "seven" "eight" "nine" "zero"
    games: [ 
      {
        img: "https://pixabay.com/images/id-149956/",
        name: "Number 6",
        options: ["eight", "two", "six"],
        correctAnswer: "six", 
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
        correctAnswer: "two", 
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
        correctAnswer: "five", 
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
        correctAnswer: "one", 
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
        correctAnswer: "four", 
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
        correctAnswer: "Circle", 
      },
      {
        img: "..\\..\\src\\assets\\Shapes\\Oval.png",
        name: "Oval",
        options: ["Circle", "Oval", "Triangle"],
        correctAnswer: "Oval", 
      },
      {
        img: "..\\..\\src\\assets\\Shapes\\Square.png",
        name: "Square",
        options: ["Circle", "Square", "Triangle"],
        correctAnswer: "Square", 
      },
      {
        img: "..\\..\\src\\assets\\Shapes\\Triangle.png",
        name: "Triangle",
        options: ["Oval", "Square", "Triangle"],
        correctAnswer: "Triangle", 
      },
    ],
  },
  {
    id: 3,
    gameType: "animal", //use on homepage and nav for game type selection
    games: [
      {
        img: "https://pixabay.com/images/id-159731/",
        name: "Cow",
        options: ["giraffe", "cow", "cat"],
        correctAnswer: "cow", 
      },
      {
        img: "https://pixabay.com/images/id-2043685/",
        name: "Cat",
        options: ["cat", "dog", "elephant"],
        correctAnswer: "cat", 
      },
      {
        img: "https://pixabay.com/images/id-5158955/",
        name: "Dog",
        options: ["rabbit", "chicken", "dog"],
        correctAnswer: "dog", 
      },
      {
        img: "https://pixabay.com/images/id-3526681/",
        name: "Elephant",
        options: ["elephant", "pig", "cat"],
        correctAnswer: "elephant", 
      },
      {
        img: "https://pixabay.com/images/id-308963/",
        name: "Giraffe",
        options: ["giraffe", "sheep", "dolphin"],
        correctAnswer: "giraffe", 
      },
      {
        img: "https://pixabay.com/images/id-159496/",
        name: "Chickens",
        options: ["dog", "giraffe", "chicken"],
        correctAnswer: "chicken", 
      },
      {
        img: "https://pixabay.com/images/id-4888445/",
        name: "Rabbit",
        options: ["rabbit", "elephant", "cow"],
        correctAnswer: "rabbit", 
      },
      {
        img: "https://pixabay.com/images/id-7036679/",
        name: "Dolphin",
        options: ["sheep", "dolphin", "chicken"],
        correctAnswer: "dolphin", 
      },
      {
        img: "https://pixabay.com/images/id-4605992/",
        name: "Sheep",
        options: ["dog", "giraffe", "sheep"],
        correctAnswer: "sheep", 
      },
      {
        img: "https://pixabay.com/images/id-3498048/",
        name: "Pig",
        options: ["pig", "cat", "cow"],
        correctAnswer: "pig", 
      },
    ],
  },
  {
    id: 4,
    gameType: "letter", //use on homepage and nav for game type selection
    games: [
      {
        img: "6812515",
        name: "G",
        options: ["a", "h", "g"],
        correctAnswer: "g", 
      },
      {
        img: "https://pixabay.com/images/id-6812531/",
        name: "B",
        options: ["w", "b", "q"],
        correctAnswer: "b", 
      },
      {
        img: "https://pixabay.com/images/id-6819333/",
        name: "H",
        options: ["m", "e", "h"],
        correctAnswer: "h", 
      },
      {
        img: "https://pixabay.com/images/id-6812564/",
        name: "F",
        options: ["e", "f", "u"],
        correctAnswer: "f", 
      },
      {
        img: "https://pixabay.com/images/id-6806219/",
        name: "D",
        options: ["r", "d", "b"],
        correctAnswer: "d", 
      },
      {
        img: "https://pixabay.com/images/id-6806213/",
        name: "A",
        options: ["o", "p", "a"],
        correctAnswer: "a", 
      },
      {
        img: "https://pixabay.com/images/id-6806232/",
        name: "R",
        options: ["r", "m", "n"],
        correctAnswer: "r", 
      },
      {
        img: "https://pixabay.com/images/id-6812511/",
        name: "E",
        options: ["u", "e", "c"],
        correctAnswer: "e", 
      },
      {
        img: "https://pixabay.com/images/id-6812569/",
        name: "N",
        options: ["n", "m", "w"],
        correctAnswer: "n", 
      },
    ],
  },
];

export default dataJson;
