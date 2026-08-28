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