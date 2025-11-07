function toBinary(n) {
  return (n >>> 0).toString(2);  // convert to unsigned binary
}

function calculate() {
  let a = parseInt(document.getElementById("numA").value) || 0;
  let b = parseInt(document.getElementById("numB").value) || 0;
  let op = document.getElementById("operation").value;
  let result;

  switch(op) {
    case "and": result = a & b; break;
    case "or": result = a | b; break;
    case "xor": result = a ^ b; break;
    case "not": result = ~a; break;
    case "lshift": result = a << b; break;
    case "rshift": result = a >> b; break;
    case "add": result = a + b; break;
    case "sub": result = a - b; break;
    case "mul": result = a * b; break;
    case "div": result = b !== 0 ? a / b : "Error (divide by zero)"; break;
    default: result = "Invalid Operation";
  }

  document.getElementById("result").innerHTML = `
    <h3>Result:</h3>
    Decimal: ${result} <br>
    Binary: ${typeof result === "number" ? toBinary(result) : "N/A"} <br>
    Hex: ${typeof result === "number" ? "0x" + result.toString(16) : "N/A"} <br>
    Octal: ${typeof result === "number" ? "0o" + result.toString(8) : "N/A"}
  `;
}
