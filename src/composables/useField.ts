import { type BaseTile } from 'types/cell.type';

export const useField = () => {
    function pregenerateField (height: number, width: number): BaseTile[][] {
        const result: BaseTile[][] = [];
        let idCount = 0;
        for (let i = 0; i < height; ++i) {
            const row: BaseTile[] = [];
            result.push(row)
            for (let j = 0; j < width; ++j) {
                row.push({ 
                    id: idCount++,
                    x: j, 
                    y: i, 
                    isFlagued: false
                })
            }
        }
        return result;
    }
    
    return {
        pregenerateField,
    }
}