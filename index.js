// Requests the student's full name
// The prompt function requests data from the user. Here, we request the student's full name and store it in the variable.
var studentFullName = prompt("What is the student's full name?");

// Request student's grades for each term
// For each term (1st, 2nd, 3rd and 4th), we ask the user for a grade. We use Number() to ensure that the value entered is treated as a number.
var studentGradeFirstPeriod = Number(
  prompt("What was your grade in this 1º period?")
);
var studentGradeSecondPeriod = Number(
  prompt("What was your grade in this 2º period?")
);
var studentGradeThirdPeriod = Number(
  prompt("What was your grade in this 3º period?")
);
var studentGradeFourthPeriod = Number(
  prompt("What was your grade in this 4º period?")
);

// Request the student's absences for each period
// Similarly, we ask the user for the number of absences for each period. Using Number() prevents text values ​​from causing errors.
var quantityAbsencesFirstPeriod = Number(
  prompt("How many absences have you had during the 1º period?")
);
var quantityAbsencesSecondPeriod = Number(
  prompt("How many absences have you had during the 2º period?")
);
var quantityAbsencesThirdPeriod = Number(
  prompt("How many absences have you had during the 3º period?")
);
var quantityAbsencesFourthPeriod = Number(
  prompt("How many absences have you had during the 4º period?")
);

// Error validations for data inputs

// Validates if the name has an invalid length (less than 3 or greater than 15 characters)
var hasInvalidName = studentFullName.length < 3 || studentFullName.length > 15;

// Check if any of the notes is not a valid number
var hasNaNGradesError =
  Number.isNaN(studentGradeFirstPeriod) ||
  Number.isNaN(studentGradeSecondPeriod) ||
  Number.isNaN(studentGradeThirdPeriod) ||
  Number.isNaN(studentGradeFourthPeriod);

// Check if any of the grades are outside the allowed range (0 to 10)
var hasInvalidGradeError =
  studentGradeFirstPeriod < 0 ||
  studentGradeFirstPeriod > 10 ||
  studentGradeSecondPeriod < 0 ||
  studentGradeSecondPeriod > 10 ||
  studentGradeThirdPeriod < 0 ||
  studentGradeThirdPeriod > 10 ||
  studentGradeFourthPeriod < 0 ||
  studentGradeFourthPeriod > 10;

// Check if any of the missing values ​​is not a valid number
var hasNaNAbsencesError =
  Number.isNaN(quantityAbsencesFirstPeriod) ||
  Number.isNaN(quantityAbsencesSecondPeriod) ||
  Number.isNaN(quantityAbsencesThirdPeriod) ||
  Number.isNaN(quantityAbsencesFourthPeriod);

// Checks if any number of absences is outside the allowed range (0 to 40)
var hasInvalidAbsencesError =
  quantityAbsencesFirstPeriod < 0 ||
  quantityAbsencesFirstPeriod > 40 ||
  quantityAbsencesSecondPeriod < 0 ||
  quantityAbsencesSecondPeriod > 40 ||
  quantityAbsencesThirdPeriod < 0 ||
  quantityAbsencesThirdPeriod > 40 ||
  quantityAbsencesFourthPeriod < 0 ||
  quantityAbsencesFourthPeriod > 40;

// Initialize a variable to store error messages
var errorMessage = null;

// Name validation
if (hasInvalidName) {
  errorMessage = "The student's name must be between 3 and 15 characters!";
}

// Validation of grades
if (hasNaNGradesError) {
  errorMessage = "You entered a invalid grade!";
} else if (hasInvalidGradeError) {
  errorMessage = "Grades must be between 0 and 10!";
}

// Validation of absences
if (hasNaNAbsencesError) {
  errorMessage = "You entered a invalid absence!";
} else if (hasInvalidAbsencesError) {
  errorMessage = "The absences quantity must be between 0 and 40";
}

// Checking student status based on average and absences
if (
  !hasNaNGradesError &&
  !hasInvalidGradeError &&
  !hasNaNAbsencesError &&
  !hasInvalidAbsencesError
) {
  // Calculates the total number of absences and the average grade
  var totalAbsences =
    quantityAbsencesFirstPeriod +
    quantityAbsencesSecondPeriod +
    quantityAbsencesThirdPeriod +
    quantityAbsencesFourthPeriod;
  var averageGrade =
    (studentGradeFirstPeriod +
      studentGradeSecondPeriod +
      studentGradeThirdPeriod +
      studentGradeFourthPeriod) /
    4;
  var statusStudent = "";

  // Determines student status based on average
  if (averageGrade <= 3) {
    statusStudent = "Failed";
  } else if (averageGrade <= 6) {
    statusStudent = "Recovery";
  } else {
    statusStudent = "Approved";
  }

  // Checks if the student failed due to absences
  if (totalAbsences > 72) {
    statusStudent = "Failed due to absences";
  } else if (totalAbsences === 0 && averageGrade === 10) {
    statusStudent = "Approved with excellence!";
  }
} else {
  // If there are errors, the status will be "Error"
  statusStudent = "Error";
}

// Fills in the student's name in the HTML
document.getElementById("student-name").innerText = studentFullName;
document.getElementById("report-title").innerText =
  "Student report card " + studentFullName;

// Fill in the grades in the HTML
document.getElementById("grade1").innerText = studentGradeFirstPeriod;
document.getElementById("grade2").innerText = studentGradeSecondPeriod;
document.getElementById("grade3").innerText = studentGradeThirdPeriod;
document.getElementById("grade4").innerText = studentGradeFourthPeriod;

// Fills in the absences in the HTML
document.getElementById("absences1").innerText = quantityAbsencesFirstPeriod;
document.getElementById("absences2").innerText = quantityAbsencesSecondPeriod;
document.getElementById("absences3").innerText = quantityAbsencesThirdPeriod;
document.getElementById("absences4").innerText = quantityAbsencesFourthPeriod;

// Fills the total absences and the average in the HTML
document.getElementById("total-absences").innerText = totalAbsences || "Error";
document.getElementById("average-grade").innerText = averageGrade || "Error";

// Display the error message, if any
if (errorMessage != null) {
  document.getElementById("error-message").innerText = errorMessage;
  document.getElementById("error-container").className =
    "text-xl font-semibold bg-red-700 text-white py-2 rounded";
}

// Fill in the student's status in the HTML
document.getElementById("student-status").innerText = statusStudent;
