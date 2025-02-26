const adj = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
function printAdj(matrix) {
  for (let z = 0; z < matrix.length; z++) {
    console.log(`Zeile: ${z} lautet: ${matrix[z].join(" ")}`);
  }
}
function quadrat(matrix) {
  const rv = [];
  for (let z = 0; z < matrix.length; z++) {
    const row = [];
    for (let s = 0; s < matrix[z].length; s++) {
      row.push(NaN); // erg: unbekannt
    }
    rv.push(row);
  }
  for (let z = 0; z < matrix.length; z++) {
    for (let s = 0; s < matrix[z].length; s++) {
      // TODO
    }
  }
  return rv;
}
printAdj(adj);
printAdj(quadrat(adj));
