let silabus1 = ['Math', 'English', 'Programming']
let silabus2 = ['Geography', 'Spanish', 'Programming']

compare = (arr1, arr2) => {
  let result = false

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result = true
    }
  }
  return result
}

console.log(compare(silabus1, silabus2))
