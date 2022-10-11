export function incTurn(turn: any){
  return turn((prevInc: number) => prevInc + 1)
}