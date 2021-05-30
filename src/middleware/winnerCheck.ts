export function winnerCheck(human: string | null, ai: string | null) {
  // ! -> rock -> scissors -> paper -> !
  const win = 'you won';
  const lose = 'you lose';
  const draw = 'draw';
  if (human === ai) {
    return draw;
  }
  if (human === 'ROCK' && ai === 'SCISSORS') {
    return win;
  } if (human === 'SCISSORS' && ai === 'PAPER') {
    return win;
  } if (human === 'PAPER' && ai === 'ROCK') {
    return win;
  }
  return lose;
}
