import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { GameData } from "./GameData";
import { HTMLReport } from "./reporters/HTMLReport";

export interface Analyzer {
    run(games: GameData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static SummaryFactory(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HTMLReport());
    }
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }


    buildAndReport(games: GameData[]): void {
        const output = this.analyzer.run(games);

        this.outputTarget.print(output);

    }
}