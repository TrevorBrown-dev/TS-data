import fs from 'fs';
import { GameResult } from './GameResult';
import { parseDate } from './utils';

type GameData = [Date, String, String, Number, Number, GameResult, String]

export class CsvFileReader {
    data: GameData[] = [];
    constructor(public fileName: string) { }
    
    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n').map(row => row.split(',')).map((row: string[]): GameData => {
            return [
                parseDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as GameResult,
                row[6]
            ]
        });
    }
}