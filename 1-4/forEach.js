const arr = [0,1,2,3,4,5,6,7,8,9,10]
const oddArray = []

arr.forEach(function(element){
    console.log(element)
})

arr1.forEach(function(element){
    if(element % 2 ==1){
        oddArray.push(element)
    }
})

console.log(oddArray)

const arr2 = ['one', 'two', 'three', 'four']

arr2.forEach(function(potato, index){
    console.log(index)
})