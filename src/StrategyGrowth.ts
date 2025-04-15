export interface StrategyGrowth {
    run(value: number): number;
}

export class SquareGrowth implements StrategyGrowth {
    run(value: number) {
        return value * value;
    }
}

export class LogGrowth implements StrategyGrowth {
    run(value: number) {
        return Math.log(value);
    }
}

export class CubeGrowth implements StrategyGrowth {
    run(value: number) {
        return value * value * value;
    }
}

export class Context {
    private growthAlgorithm: StrategyGrowth | undefined;

    get getGrowthAlgorithm(): StrategyGrowth | undefined {
        return this.growthAlgorithm;
    }

    set setGrowthAlgorithm(value: StrategyGrowth | undefined) {
        this.growthAlgorithm = value;
    }

    constructor() { }

    setStrategyGrowth(newGrowthAlgorithm: StrategyGrowth): string {
        this.growthAlgorithm = newGrowthAlgorithm;
        return ``;
    }

    run(value: number): number {
        return this.growthAlgorithm.run(value);
    }
}