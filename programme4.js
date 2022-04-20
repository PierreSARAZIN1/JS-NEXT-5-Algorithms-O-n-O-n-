//EXERCICE 4
const roadOne = [3, 7, 8, 3, 6, 1];
const roadTwo = [1, 4, 5, 8];

const subject2bis = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let newArray = Object.values(array)
        let workArray = newArray.splice(i, array.length);
        let max = Math.max(...workArray);
        if (array[i] >= max) {
            count++;
        };
    };
    return count;

};
console.log(subject2bis(roadOne))
console.log(subject2bis(roadTwo))