import { useState } from "react";

export default function useCalculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState(0);

    function calculate(operator: string) {
        const a = Number(firstNumber);
        const b = Number(secondNumber);

        let answer: 0;

       if (operator === "+") {
            answer = a + b;
        } else if (operator === "-") {
            answer = a - b;
        } else if (operator === "*") {
            answer = a * b;
        } else if (operator === "/") {
            answer = a / b;
        } else if (operator === "**") {
            answer = a ** b;
        } else {
            return;
        }

        setResult(answer);
    }

    function clearCalculator() {
        setFirstNumber("");
        setSecondNumber("");
        setResult(0);
    }

    let color = "black";

    if (Number(result) < 0) {
        color = "red";
    }

    return { firstNumber, secondNumber, result, setFirstNumber, setSecondNumber, calculate, clearCalculator, color};
}