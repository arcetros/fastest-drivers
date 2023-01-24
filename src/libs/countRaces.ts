function fsqrt(x: number): number {
  if (x === 0 || x === 1) {
    return x
  }
  let i = 1,
    result = 1

  while (result <= x) {
    i++
    result = i * i
  }
  return i - 1
}

function createMatrix(rows: number, cols: number, value: number): number[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(value))
}

function createMatrix1(matrix: number[][]): number[][] {
  const matrix1 = createMatrix(matrix.length, matrix[0].length, 0)
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      matrix1[i][j] = matrix[i][j]
    }
  }
  return matrix1
}

function createMatrix2(matrix1: number[][], w: number): number[][] {
  const matrix2 = createMatrix(matrix1.length, matrix1[0].length, 0)
  let k = w
  for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
      matrix2[i][j] = matrix1[i][j]
      if (j >= k) {
        matrix2[i][j] = 0
      }
    }
    k--
  }
  return matrix2
}

function countNonZero(matrix: number[][]): number {
  let count = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        count++
      }
    }
  }
  return count
}

export default function countRaces(racers: number, winners: number) {
  const matrix = createMatrix(fsqrt(racers), fsqrt(racers), 3)
  const matrix1 = createMatrix1(matrix)
  const matrix2 = createMatrix2(matrix1, winners)

  const c = countNonZero(matrix2)
  let rq = fsqrt(racers) + 1
  if (c - 1 === fsqrt(racers)) {
    rq++
  }

  return rq
}
