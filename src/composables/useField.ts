import type { Coords } from 'types/coords.type';
import { type Cell } from 'types/cell.type';

export const useField = () => {
    function generateField(height: number, width: number, bombs: number, firstCellX: number, firstCellY: number): Cell[][] {
        const maxId = height * width - 1;

        const result = [];
        
        let idCount = 0;
        let bombsRemaining = bombs;

        const bombsCoords: Coords[] = [];

        while(bombsRemaining) {
            let x = Math.round(Math.random() * width)
            let y = Math.round(Math.random() * height)

            if(x === firstCellX && y === firstCellY) continue;
            else if(bombsCoords.some(xy => xy.x === x && xy.y === y)) continue;
            else {
                bombsCoords.push({x, y});
                --bombsRemaining;
            }
        }
        //generation of field
        for (let i = 0; i < height; ++i) {
            const row: Cell[] = [];
            result.push(row)
            for (let j = 0; j < width; ++j) {

                //let isBomb = bombsRemaining ? Math.random() < bombsRemaining / (maxId - idCount): false
                const newCell: Cell = {
                    x: j,
                    y: i,
                    isBomb: bombsCoords.some((coords) => coords.x === j && coords.y === i),
                    id: idCount++,
                    isFlagued: false,
                    isStepped: false,
                }

                row.push(newCell)
            }
        }

        //pregeneration of digits
        for (let i = 0; i < height; ++i) {
            for (let j = 0; j < width; ++j) {
                let calculatedDigit = 0;
                for(let row = i - 1; row <= i + 1 && row < height; ++row) {
                    if(row < 0 || row > height) continue;
                    for(let col = j - 1; col <= j + 1 && col < width; ++col) {
                        if(col < 0 || col > width) continue;
                        if(result[row][col].isBomb) {
                            ++calculatedDigit;
                        }
                    }
                }
                result[i][j].digit = calculatedDigit;
            }
        }
        
        return result
    }

    return {
        generateField
    }
}