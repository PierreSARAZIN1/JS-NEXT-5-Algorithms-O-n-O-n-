//EXERCICE 2
const roadOne = [3, 7, 8, 3, 6, 1];
const roadTwo = [1, 4, 5, 8];


const subject2 = (array) => {
    let count = 1;
    for (let i = 0; i < array.length - 2; i++) {
        let sun = true;
        for (let j = i + 1; j < array.length - i; j++) {
            if (array[i] <= array[j]) {
                sun = false;
            };
        };
        sun ? count++ : null;
    };
    return count;
};

console.log(subject2(roadOne))
console.log(subject2(roadTwo))