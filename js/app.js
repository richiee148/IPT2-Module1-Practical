$(document).ready(function () {
    $("#addStudentButton").click(function () {
        // Get input values and trim whitespace
        const idNumber = $("#idNumber").val().trim();
        const firstName = $("#firstName").val().trim();
        const middleName = $("#middleName").val().trim();
        const lastName = $("#lastName").val().trim();

        // Validation: Check for empty required fields
        if (idNumber === "" || firstName === "" || lastName === "") {
            alert("Please fill in all required fields (ID Number, Firstname, Lastname).");
            return;
        }

        // Optional: Simple ID format check (numeric check)
        if (isNaN(idNumber)) {
            alert("ID Number must be numeric.");
            return;
        }

        // Create new row element
        const newRow = `
            <tr>
                <td>${idNumber}</td>
                <td>${firstName}</td>
                <td>${middleName}</td>
                <td>${lastName}</td>
            </tr>
        `;

        // Append the new row to the table body
        $("#table-content").append(newRow);

        // Clear input form fields after successful addition
        $("#studentForm")[0].reset();
    });
});

$(document).ready(function () {
    // Developer 2: Add Subject Functionality
    $("#addSubject").click(function () {
        // Read input values and trim whitespace
        const subjectCode = $("#subjectCode").val().trim();
        const subjectName = $("#subjectName").val().trim();
        const units = $("#units").val().trim();

        // Input Validation: Check for empty fields
        if (subjectCode === "" || subjectName === "" || units === "") {
            alert("Please fill in all required fields (Subject Code, Subject Name, Units).");
            return;
        }

        // Input Validation: Ensure units is a positive number
        if (isNaN(units) || Number(units) <= 0) {
            alert("Please enter a valid positive number for Units.");
            return;
        }

        // Create table row
        const newRow = `
            <tr>
                <td>${subjectCode}</td>
                <td>${subjectName}</td>
                <td>${units}</td>
            </tr>
        `;

        // Populate the subject table body
        $("#table-content").append(newRow);

        // Clear input form fields
        $("#subjectCode").val("");
        $("#subjectName").val("");
        $("#units").val("");
    });
});