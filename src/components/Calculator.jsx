import { useState } from "react";
import "./style.css";

function Calculator() {
  const [result, setResult] = useState("0");
  const [input, setInput] = useState("");
  const [operation, setOperation] = useState(null);

  function handleClick(event) {
    const value = event.target.value;

    if (value === "+") {
      if (input) {
        setOperation("add");
        setResult(input);
        setInput("");
      }
    } else if (value === "-") {
      if (input) {
        setOperation("subtract");
        setResult(input);
        setInput("");
      }
    } else if (value === "*") {
      if (input) {
        setOperation("multiply");
        setResult(input);
        setInput("");
      }
    } else if (value === "/") {
      if (input) {
        setOperation("divide");
        setResult(input);
        setInput("");
      }
    } else if (value === "=") {
      if (operation && input) {
        if (operation === "add") {
          setResult((prevResult) => prevResult * 1 + input * 1);
        } else if (operation === "subtract") {
          setResult((prevResult) => prevResult * 1 - input * 1);
        } else if (operation === "multiply") {
          setResult((prevResult) => prevResult * 1 * (input * 1));
        } else if (operation === "divide") {
          setResult((prevResult) => (prevResult * 1) / (input * 1));
        }
        setInput("");
        setOperation(null);
      }
    } else if (value === "C") {
      setResult("0");
      setInput("");
      setOperation(null);
    } else {
      setInput(input + value);
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={input || result} disabled />
      <br />
      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button style={{ color: "black" }} value="+" onClick={handleClick}>
        +
      </button>
      <br />
      <button value="4" onClick={handleClick}>
        4
      </button>
      <button value="5" onClick={handleClick}>
        5
      </button>
      <button value="6" onClick={handleClick}>
        6
      </button>
      <button style={{ color: "black" }} value="-" onClick={handleClick}>
        -
      </button>
      <br />
      <button value="7" onClick={handleClick}>
        7
      </button>
      <button value="8" onClick={handleClick}>
        8
      </button>
      <button value="9" onClick={handleClick}>
        9
      </button>
      <button style={{ color: "black" }} value="*" onClick={handleClick}>
        *
      </button>
      <br />
      <button style={{ color: "black" }} value="." onClick={handleClick}>
        .
      </button>
      <button value="0" onClick={handleClick}>
        0
      </button>
      <button style={{ color: "black" }} value="C" onClick={handleClick}>
        C
      </button>
      <button style={{ color: "black" }} value="/" onClick={handleClick}>
        /
      </button>
      <br />
      <button
        style={{ color: "black" }}
        className="esit"
        value="="
        onClick={handleClick}
      >
        =
      </button>
    </div>
  );
}

export default Calculator;
