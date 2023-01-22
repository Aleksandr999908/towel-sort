module.exports = function towelSort (matrix) {
  if (!matrix) return []

  return matrix.reduce((arr1, arr2, arr3) => {
      if (arr3 % 2 == 0) arr1.push(...arr2)
      else arr1.push(...arr2.reverse())
      return arr1
  }, [])

};
