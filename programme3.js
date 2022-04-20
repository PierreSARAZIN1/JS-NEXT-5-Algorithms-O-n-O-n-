const arrayT = [10, 15, 3, 7];


//EXERCICE 3
const subject1bis = (array, k) => {
    for (let i = 0; i < array.length; i++) {
        let sum = k - array[i];
        if (array.includes(sum) === true) {
            return true
        } else {
            i++;
        };
    };
    return false
};


const subject1Array = arrayT
const k = 13;

console.log(subject1bis(arrayT, k));