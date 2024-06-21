function shuffleArray(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return "Invalid Array"
    }
    
    for(let i=arr.length-1; i>0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const shuffledArray = shuffleArray(arr)
console.log(shuffledArray);