import { GameData } from "../GameData";
import { GameResult } from "../GameResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) { }

    run(games: GameData[]): string {
        let wins = 0;

        games.forEach(game => {
        if ((game[1] === 'Man United' && game[5] === GameResult.HomeWin) || (game[2] === 'Man United' && game[5] === GameResult.AwayWin)) wins++;
        })

        return `Team ${this.team} won ${wins} games`;
    }
}