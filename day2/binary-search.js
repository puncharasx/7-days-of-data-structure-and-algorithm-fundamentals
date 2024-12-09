function findMin(arr) {
  const n = arr.length
  let left = 0
  let right = arr.length - 1
  let result = -1

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)

    if (arr[mid] > arr[n - 1]) {
      left = mid + 1
    } else {
      right = mid - 1
      result = arr[mid]
    }
  }

  return result
}

const result = findMin([1, 2, 3, 4, 5])

console.log('result', result)
