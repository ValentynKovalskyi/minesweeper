import { type Cell } from 'types/cell.type';

export const useField = () => {
    function generateField(height: number, width: number, bombs: number): Cell[][] {
        const maxId = height * width - 1;

        const result = [];
        
        let idCount = 0;
        let bombsRemaining = bombs;
        //generation of field
        for (let i = 0; i < height; ++i) {
            const row: Cell[] = [];
            result.push(row)
            for (let j = 0; j < width; ++j) {
                const newCell: Cell = {
                    id: idCount++,
                    isBomb: bombsRemaining ? Math.random() < bombsRemaining / (maxId - idCount): false,
                    isFlagued: false,
                    isStepped: false,
                }

                if(newCell.isBomb) bombsRemaining--;
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