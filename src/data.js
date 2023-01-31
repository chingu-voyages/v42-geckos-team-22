import Circle from './assets/Shapes/Circle.png'
import Oval from './assets/Shapes/Oval.png'
import Square from './assets/Shapes/Square.png'
import Triangle from './assets/Shapes/Triangle.png'

const dataJson = [
  {
    id: 1,
    gameType: "Number", //use on homepage and nav for game type selection
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
    gameType: "Shapes", //use on homepage and nav for game type selection
    games: [
      {
        img: {Circle},
        name: "Circle",
        options: ["Circle", "Square", "Triangle"],
        correctAnswer: "Circle", //if this found in "options", user win
      },
      {
        img: {Oval},
        name: "Oval",
        options: ["Circle", "Oval", "Triangle"],
        correctAnswer: "Oval", //if this found in "options", user win
      },
      {
        img: {Square},
        name: "Square",
        options: ["Circle", "Square", "Triangle"],
        correctAnswer: "Square", //if this found in "options", user win
      },
      {
        img: {Triangle},
        name: "Triangle",
        options: ["Oval", "Square", "Triangle"],
        correctAnswer: "Triangle", //if this found in "options", user win
      },
    ],
  },
];

export default dataJson
