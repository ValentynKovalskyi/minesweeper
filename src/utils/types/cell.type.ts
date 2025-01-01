export type Cell = {
    x: number,
    y: number,
    id: number,
    isBomb: boolean,
    isFlagued: boolean,
    isStepped: boolean,
    digit?: number,
}