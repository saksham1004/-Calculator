 const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (value === "C") {
            expression = "";
        } else if (value === "<") {
            // Remove last character
            expression = expression.slice(0, -1);
        } else if (value === "=") {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = "Error";
            }
        } else {
            expression += value;
        }

        input.textContent = expression;
    });
});