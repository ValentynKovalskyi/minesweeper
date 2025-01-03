export interface ResolvedTile extends BaseTile {
    isBomb: boolean,
    isStepped: boolean,
    digit?: number,
}

export interface BaseTile {
    x: number,
    y: number,
    isFlagued: boolean,
    id: number,
}