import { Header } from "./components/header.jsx";
import { Input } from "./components/inputs.jsx";
import { Results } from "./components/results.jsx";
import { useState, useRef } from "react";

export function App() {
  const loanAmountRef = useRef();
  const rateOfInterestRef = useRef();
  const loanTenureRef = useRef();

  let initialValues = {
    principle: 0,
    monthlyEMI: 0,
    totalInterest: 0,
    totalAmount: 0,
  };
  const [bill, setBill] = useState(initialValues);

  const resetInputFields = () => {
    setBill(initialValues) ;
    loanAmountRef.current.value = "" ;
    rateOfInterestRef.current.value = "" ; 
    loanTenureRef.current.value = "" ;
  };

  let handleCompute = () => {
    if (loanAmountRef.current.value < 100000) {
      alert("Loan Amount must be 1 Lakh atleast");
      resetInputFields();
      return;
    }
    if (rateOfInterestRef.current.value > 30 || loanTenureRef.current.value > 30) {
      alert("Rate of interest / Loan Tenure shouldn't be more than 30");
      resetInputFields();
      return;
    }

    let P = loanAmountRef.current.value;
    let R = rateOfInterestRef.current.value / 12 / 100;
    let N = loanTenureRef.current.value * 12;
    let monthlyEMI = 0 ;
    if (R === 0) monthlyEMI = Math.round(P / N);
    else
      monthlyEMI = Math.round((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));
    let totalInterest = monthlyEMI * N - P;
    let totalAmount = monthlyEMI * N;
    console.log(P, R, N);
    console.log(` EMI - ${monthlyEMI} \n interest - ${totalInterest} \n Total - ${totalAmount}`);
    setBill({
      principle: P,
      monthlyEMI: monthlyEMI,
      totalInterest: totalInterest,
      totalAmount: totalAmount,
    });
  };

  return (
    <>
      <Header></Header>
      <div className="container box">
        <div>
          <Input
            cost={handleCompute}
            loanAmountRef={loanAmountRef}
            rateOfInterestRef={rateOfInterestRef}
            loanTenureRef={loanTenureRef}
          ></Input>
        </div>
        {bill.monthlyEMI > 0 &&
        <div className="results-container">
          <Results
            principle={bill.principle}
            emi={bill.monthlyEMI}
            interest={bill.totalInterest}
            amount={bill.totalAmount}
          ></Results>
        </div>}
      </div>
    </>
  );
}
