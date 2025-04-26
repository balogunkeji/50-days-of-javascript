var students = [
  { id: 14, name: "Kyle" },
  { id: 73, name: "Suzy" },
  { id: 112, name: "Frank" },
  { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
  for (let student of students) {
    if (student.id === studentID) {
      return student.name;
    }
  }
  return "Tomisin"
}

let nextStudent = getStudentName(73);
console.log(nextStudent);

function updateStudent(name){
  function update(age) {
    let newStudent = {name, age};
    return newStudent;
  }
  console.log(update(17));
  return name;
}
console.log(updateStudent('Tomisin'));

function sum(a){
  return function (b){
    return a + b;
  }
}
console.log(sum(1)(3));
let arr = [0,1,2,3,4,5,6,7,8,9,10];
function inBetween(a,b){
  return function(x){
    return x >= a && x <= b
  }
}
function inArr(arr){
  return function(x){
    return arr.includes(x)
  }
}

function inArr2(arr){
  return function(x){
    return arr.some((y) => (x * y) % 2 === 0);  }
}
function sums(nums, target){
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let num = target + nums[i];
    if(map.hasOwnProperty(num)) {
      return [map[num], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

function TwoSum (l1,l2){

}

function makeCounter(){
  let count = 0;
  function counter(){
    return count++;
  }
  counter.set = (value) => count = value;
  counter.decrease = () => count--;
  return counter;
}

console.log(arr.filter(inBetween(2,5)));
console.log(arr.filter(inArr([3,4,5,6,7])));
console.log(arr.filter(inArr2(arr.filter(x => x % 2 === 0))));
console.log(sums([10,30,10], 20))
console.log(makeCounter())
