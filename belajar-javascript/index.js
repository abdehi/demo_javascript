const dataPlayerScores = [
  {
    name: "Game 1",
    players: [
      { name: "Dolphins", scores: [44, 23, 71] },
      { name: "Koalas", scores: [65, 54, 49] },
    ],
  },
  {
    name: "Game 2",
    players: [
      { name: "Dolphins", scores: [85, 54, 41] },
      { name: "Koalas", scores: [23, 34, 27] },
    ],
  },
];

const calculateAverageScore = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = function (score1, score2) {
  if (score1 >= 2 * score2) {
    console.log(`Dolphins (Player 1) menang (${score1} vs. ${score2})`);
  } else if (score2 >= 2 * score1) {
    console.log(`Koalas (Player 2) menang (${score2} vs. ${score1})`);
  } else {
    console.log("Tidak ada pemenang.");
  }
};

function runApp1() {
  const player1AverageScore = calculateAverageScore(44, 23, 71);
  const player2AverageScore = calculateAverageScore(65, 54, 49);
  checkWinner(player1AverageScore, player2AverageScore);
}

function runApp2() {
  const player1AverageScore = calculateAverageScore(85, 54, 41);
  const player2AverageScore = calculateAverageScore(23, 34, 27);
  checkWinner(player1AverageScore, player2AverageScore);
}

runApp1();
runApp2();
