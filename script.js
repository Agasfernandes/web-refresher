
// Coffee Serving Calculator

// Base measurements for 1 serving (in ml)
const CONCENTRATE_PER_CUP = 30; // 30 ml concentrate
const WATER_PER_CUP = 90;       // 90 ml water or milk

// Select DOM elements
const servingsSlider = document.getElementById("servings-slider");
const cupsCount = document.getElementById("cups-count");
const concentrateAmount = document.getElementById("concentrate-amount");
const waterAmount = document.getElementById("water-amount");

// Function to update displayed values based on slider input
function updateRecipe() {
    const cups = Number(servingsSlider.value);

    // Calculate amounts
    const totalConcentrate = cups * CONCENTRATE_PER_CUP;
    const totalWater = cups * WATER_PER_CUP;

    // Update the DOM text content
    cupsCount.textContent = cups;
    concentrateAmount.textContent = totalConcentrate;
    waterAmount.textContent = totalWater;
}

// Attach input event listener to the slider
servingsSlider.addEventListener("input", updateRecipe);