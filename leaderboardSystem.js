const findTopScorers = ( students, threshold) => students.filter(s => s.score > threshold).map(s => s.name);
const sortStudentsByScore = (students) => students.sort((a, b) => b.score - a.score);
const removeDuplicates = (arr) => arr.filter((num, index) => arr.indexOf(num) === index);
const getMedianScore = (scores) => {
  scores.sort((a, b) => a - b);
  const mid = Math.floor(scores.length / 2);
  return scores.length % 2 !== 0 ? scores[mid] : (scores[mid - 1] + scores[mid]) / 2;
};

console.log(findTopScorers([{ name: 'Alice', score: 90 }, { name: 'Bob', score: 85 }], 80));
console.log(sortStudentsByScore([{ name: 'Alice', score: 90 }, { name: 'Bob', score: 85 }]));
console.log(removeDuplicates([1, 2, 2, 3]));
console.log(getMedianScore([10, 20, 30, 40]));

/*How sorting affects performance
Sorting changes how elements are arranged , so it can confuse the system, by misplacing items.Sorting is good when you want to arrange items on order but bad when it is misplacing items in disorder*/