import { Header } from "./components/header.jsx";
import { Input } from "./components/inputs.jsx";
import { Results } from "./components/results.jsx";
import { useState } from "react";

export function App() {
  let initialValues = {
    loanAmount: 0,
    Rate_of_interest: 0,
    loanTenure: 0, // years
    principle: 0,
    monthlyEMI: 0,
    totalInterest: 0,
    totalAmount: 0,
  };
  const [emi, setEMI] = useState(initialValues);

  const updateInput = (property, value) => {
    setEMI({
      ...emi,
      [property]: value,
    });
  };

  let handleCompute = () => {
    if (emi.loanAmount < 100000) {
      alert("Loan Amount must be 1 Lakh atleast");
      setEMI(initialValues);
      return;
    }
    if (emi.Rate_of_interest > 30 || emi.loanTenure > 30) {
      alert("Rate of interest / Loan Tenure shouldn't be more than 30");
      setEMI(initialValues);
      return;
    }

    let P = emi.loanAmount;
    let R = emi.Rate_of_interest / 12 / 100;
    let N = emi.loanTenure * 12;
    let monthlyEMI = 0 ;
    if (R === 0) monthlyEMI = Math.round(P / N);
    else
      monthlyEMI = Math.round((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));
    let totalInterest = monthlyEMI * N - P;
    let totalAmount = monthlyEMI * N;
    console.log(P, R, N);
    console.log(` EMI - ${monthlyEMI} \n interest - ${totalInterest} \n Total - ${totalAmount}`);
    setEMI({
      ...emi, // Keeping the current three input value
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
            updateInput={updateInput}
            loanAmount={emi.loanAmount}
            Rate_of_interest={emi.Rate_of_interest}
            loanTenure={emi.loanTenure}
          ></Input>
        </div>
        <div className="results-container">
          <Results
            principle={emi.principle}
            emi={emi.monthlyEMI}
            interest={emi.totalInterest}
            amount={emi.totalAmount}
          ></Results>
        </div>
      </div>
    </>
  );
}
