import type { BaseTile, ResolvedTile } from "types/cell.type";

export function isResolvedTile(tile: BaseTile): tile is ResolvedTile {
    return 'isBomb' in tile;
}