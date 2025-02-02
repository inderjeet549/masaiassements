let scores = [35, 88, 92, 45, 77, 39, 95, 60, 28, 85]
let adjustedScores = scores.map(score => {
    if(score < 40){
      return score + 20
    }
    if(score > 90){
      return 90
    }
    return score;
})
let passedCount = adjustedScores.filter(score => score >= 50).length;
console.log("Number of Students Passed:", passedCount);
console.log("Adjusted Scores:", adjustedScores);
