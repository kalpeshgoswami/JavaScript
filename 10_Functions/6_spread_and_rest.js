// Spread Operator

const marks = [80, 75, 90, 85];

console.log(...marks);

const addMarks = [...marks, 95, 88];

console.log("total Marks:", addMarks);


// Rest Operator

// Rest collects multiple arguments into an array

function showStudents(...students) {
  console.log("Student List:", students);

  console.log("Class Leader:", students[0]);
}

showStudents("Shakespeare", "Wordsworth", "John Keats", "Emily Dickinson");
