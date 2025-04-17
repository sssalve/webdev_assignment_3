/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

// costs for day rate
let cost_per_day = {
  full: 35,
  half: 20,
};

let current_rate = cost_per_day["full"];
let days_selected = new Set();

// get buttons
const monday_button = document.getElementById("monday");
const tuesday_button = document.getElementById("tuesday");
const wednesday_button = document.getElementById("wednesday");
const thursday_button = document.getElementById("thursday");
const friday_button = document.getElementById("friday");

const full_button = document.getElementById("full");
const half_button = document.getElementById("half");

const clear_button = document.getElementById("clear-button");
// other stuff
const calculated_cost = document.getElementById("calculated-cost");

// default selection
full_button.classList.add("clicked");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggle_day(day_button, day_name) {
  // check current state and swap the state
  if (day_button.classList.contains("clicked")) {
    day_button.classList.remove("clicked");
    days_selected.delete(day_name); // add day to the days selected
  } else {
    day_button.classList.add("clicked");
    days_selected.add(day_name); // remove the day from the days selected
  }

  calculate_total();
}

// add listeners
monday_button.addEventListener("click", () =>
  toggle_day(monday_button, "monday")
);
tuesday_button.addEventListener("click", () =>
  toggle_day(tuesday_button, "tuesday")
);
wednesday_button.addEventListener("click", () =>
  toggle_day(wednesday_button, "wednesday")
);
thursday_button.addEventListener("click", () =>
  toggle_day(thursday_button, "thursday")
);
friday_button.addEventListener("click", () =>
  toggle_day(friday_button, "friday")
);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear_button.addEventListener("click", () => {
  // for each of the buttons, remove the clicked status (forEach is a super cool function)
  [
    monday_button,
    tuesday_button,
    wednesday_button,
    thursday_button,
    friday_button,
  ].forEach((button) => {
    button.classList.remove("clicked");
  });

  days_selected.clear(); // clear days selected

  calculated_cost.textContent = "0"; // no cost
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function set_rate(rate) {
  current_rate = cost_per_day[rate]; // set new rate
  if (rate === "full") {
    // change clicked status of buttons
    full_button.classList.add("clicked");
    half_button.classList.remove("clicked");
  } else {
    half_button.classList.add("clicked");
    full_button.classList.remove("clicked");
  }

  calculate_total();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full_button.addEventListener("click", () => set_rate("full"));
half_button.addEventListener("click", () => set_rate("half"));

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate_total() {
  calculated_cost.textContent = (days_selected.size * current_rate).toString();
}
