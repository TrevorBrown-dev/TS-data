import { CsvFileReader } from './CsvFileReader';
import { GameResult } from './GameResult';
import { parseDate } from './utils';


const reader = new CsvFileReader('football.csv');
reader.read();
//[date, home team, away team, home goals, away goals, winner, referee]
let manUnitedWins = 0;

reader.data.forEach(game => {
    if ((game[1] === 'Man United' && game[5] === GameResult.HomeWin) || (game[2] === 'Man United' && game[5] === GameResult.AwayWin)) manUnitedWins++;
})
console.log(manUnitedWins);



