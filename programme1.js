const arrayT = [10, 15, 3, 7];
console.log(arrayT)

//EXERCICE 1
const subject1 = (array, k) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === k)
                return true;
        }
    }
    return false;
}

const subject1Array = arrayT
const k = 13;

console.log(subject1(arrayT, k));