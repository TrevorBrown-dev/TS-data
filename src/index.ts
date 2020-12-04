import { CsvFileReader } from './CsvFileReader';
import { GameReader } from './GameReader';
import { Summary } from './Summary';


const reader = new GameReader(new CsvFileReader('football.csv'));
const summary = Summary.SummaryFactory('Crystal Palace');

reader.load();
summary.buildAndReport(reader.games);


