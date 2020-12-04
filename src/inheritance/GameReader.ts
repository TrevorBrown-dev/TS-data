import { CsvFileReader } from './CsvFileReader';
import { GameResult } from '../GameResult';
import { parseDate } from '../utils';
type GameData = [Date, String, String, Number, Number, GameResult, String]

export class GameReader extends CsvFileReader<GameData> { 
    mapRow(row: string[]): GameData {
        return [
            parseDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as GameResult,
            row[6]
        ]
    }
}
