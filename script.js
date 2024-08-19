// script.js

function generateCourseInputs() {
  const numCourses = document.getElementById("numCourses").value;
  const courseContainer = document.getElementById("courseContainer");
  courseContainer.innerHTML = ""; // Clear any existing input fields

  for (let i = 1; i <= numCourses; i++) {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course";
    courseDiv.innerHTML = `
            <label for="grade${i}">Course ${i} Grade:</label>
            <input type="number" id="grade${i}" min="0" max="100" placeholder="Enter grade (0-100)" required>
            <label for="core${i}">Core:</label>
            <input type="checkbox" id="core${i}">
        `;
    courseContainer.appendChild(courseDiv);
  }

  document.getElementById("gpaForm").style.display = "block";
}

function calculateGPA() {
  const numCourses = document.getElementById("numCourses").value;
  let totalPoints = 0;
  let totalUnits = 0;

  for (let i = 1; i <= numCourses; i++) {
    const grade = parseFloat(document.getElementById(`grade${i}`).value);
    const isCore = document.getElementById(`core${i}`).checked;
    const creditUnit = isCore ? 4 : 3;

    let gradePoint;
    if (grade > 79) {
      gradePoint = 5.0;
    } else if (grade >= 75) {
      gradePoint = 4.5;
    } else if (grade >= 70) {
      gradePoint = 4.0;
    } else if (grade >= 65) {
      gradePoint = 3.5;
    } else if (grade >= 60) {
      gradePoint = 3.0;
    } else if (grade >= 55) {
      gradePoint = 2.5;
    } else if (grade >= 50) {
      gradePoint = 2.0;
    } else {
      gradePoint = 0.0;
    }

    totalPoints += gradePoint * creditUnit;
    totalUnits += creditUnit;
  }

  const gpa = totalPoints / totalUnits;
  document.getElementById("result").innerText = `Your GPA is: ${gpa.toFixed(
    2
  )} out of 5.0`;
}
