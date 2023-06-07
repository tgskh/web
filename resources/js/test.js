let arr1 = [1, 1, 2];
let arr2 = [17, 17, 3, 17, 17, 17, 17];

function stray(numbers) {
    let otherNum = 0;
    numbers.forEach((element, index, arr) => {
        if (arr[index] != arr[index+1]) {
            otherNum = arr[index];
        }
  });
  return otherNum;
}

console.log(stray(arr1));


  