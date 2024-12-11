const userInput = document.getElementById("date");
const button = document.querySelector(".btn");
const result = document.getElementById("result");

// Set the maximum date to today
userInput.max = new Date().toISOString().split("T")[0];

// Calculate age based on birthdate input
function calculateAge() {
    const birthDate = new Date(userInput.value);
    const today = new Date();

    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    let ageYear = currentYear - birthYear;
    let ageMonth = currentMonth - birthMonth;
    let ageDay = currentDay - birthDay;

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        ageYear--;
        ageMonth += 12;
    }

    if (ageDay < 0) {
        const daysInLastMonth = getDaysInMonth(currentYear, currentMonth - 1);
        ageDay += daysInLastMonth;
        ageMonth--;
    }

    result.innerHTML = `You are <span>${ageYear}</span> years, <span>${ageMonth}</span> months, and <span>${ageDay}</span> days old`;
}

// Get number of days in a given month
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

button.addEventListener("click", calculateAge);
