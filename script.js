document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const registrationData = document.getElementById("registrationData");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Create a new div to display the registration data
        const registrationInfo = document.createElement("div");
        registrationInfo.classList.add("registration-info");

        registrationInfo.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
        `;

        // Add a horizontal line to separate entries
        const separator = document.createElement("hr");

        // Append the registration data div and separator to the 'registrationData' container
        registrationData.appendChild(registrationInfo);
        registrationData.appendChild(separator);

        // Reset the form fields
        form.reset();
    });
});
