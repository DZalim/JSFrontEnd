function formatGrade(grade) {
  let description = 0;

  if (grade < 3) {
    description = "Fail";
    grade = 2;
  } else if (grade >= 3 && grade < 3.5) {
    description = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    description = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    description = "Very good";
  } else {
    description = "Excellent";
  }

  if (description !== "Fail") {
    console.log(`${description} (${grade.toFixed(2)})`);
  } else {
    console.log(`${description} (${grade})`);
  }
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
