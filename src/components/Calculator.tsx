import useCalculator from "../hooks/useCalculator";

export default function Calculator() {
    const {firstNumber, secondNumber, result, setFirstNumber, setSecondNumber, calculate, clearCalculator, color} = useCalculator();

    return (
        
        <div>
            <h1>Calculator</h1>

            
            <div>
                <input type="number" value={firstNumber} onChange={(event) => setFirstNumber(event.target.value)}/>

                <input type="number" value={secondNumber} onChange={(event) => setSecondNumber(event.target.value)} />
            </div>

            <button onClick={() => calculate("+")}>+</button>
            <button onClick={() => calculate("-")}>-</button>
            <button onClick={() => calculate("*")}>*</button>
            <button onClick={() => calculate("/")}>/</button>
            <button onClick={() => calculate("**")}>**</button>
            <button onClick={clearCalculator}>CLEAR</button>


            
            <h3 style={{ color }}>{result}</h3>
        </div>
    );


}