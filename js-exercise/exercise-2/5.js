// function to compute teh union of two array
function computeUnion(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid input"
    }

    const unionSet = new Set([...arr1, ...arr2])
    return Array.from(unionSet)
}

// function to computer difference of two array
function computeDifference(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid input"
    }

    const differenceSet = new Set(arr1.filter(item => !arr2.includes(item)))
    return Array.from(differenceSet)
}

// function to computer intersection of two array
function computeIntersection(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid input"
    }

    const intersectionSet = new Set(arr1.filter(item => arr2.includes(item)))
    return Array.from(intersectionSet)
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

const unionResult = computeUnion(arr1, arr2)
const differenceResult1 = computeDifference(arr1, arr2)
const differenceResult2 = computeDifference(arr2, arr1)
const intersectionResult = computeIntersection(arr1, arr2)

console.log("Union:", unionResult);
console.log("difference of arr1, arr2: ", differenceResult1);
console.log("difference of arr2, arr1: ${differenceResult2}", differenceResult2);
console.log("intersectoin: ", intersectionResult);