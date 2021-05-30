export function aiSelect() {
  const choices = ['PAPER', 'ROCK', 'SCISSORS'];
  return choices[Math.floor(Math.random() * 3)];
}
