import { Header } from "./components/header.jsx";
import { Input } from "./components/inputs.jsx";
import { Results } from "./components/results.jsx";
import { useState } from "react";

export function App() {
  const [bill, setBill] = useState({
    P: 0,
    monthlyEMI: 0,
    totalInterest: 0,
    totalAmount: 0,
  });

  const calculate = (p, emi, interest, amount) => {
    setBill({
      P: p,
      monthlyEMI: emi,
      totalInterest: interest,
      totalAmount: amount,
    });
  };

  return (
    <>
      <Header></Header>
      <div className="container box">
        <div>
          <Input cost={calculate}></Input>
        </div>
        <div className="results-container">
          <Results
            principle={bill.P}
            emi={bill.monthlyEMI}
            interest={bill.totalInterest}
            amount={bill.totalAmount}
          ></Results>
        </div>
      </div>
    </>
  );
}
