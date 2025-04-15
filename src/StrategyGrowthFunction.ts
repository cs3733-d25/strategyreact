type GrowthStrategy = (value: number) => number;

export const squareGrowth: GrowthStrategy = (value: number) => {
    return value * value
}
export const cubeGrowth: GrowthStrategy = (value: number) => {
    return Math.pow(value,3)
}
export const logGrowth: GrowthStrategy = (value: number) => {
    return Math.log(value)
}

export const selectGrowthStrategy: (growthStrategy: GrowthStrategy, value: number) => number
    = (growthStrategy: GrowthStrategy, value: number) => growthStrategy(value)