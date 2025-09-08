import { useState } from "react";

export function Input({ cost }) {
  let initialValues = {
    loanAmount: 0,
    Rate_of_interest: 0,
    loanTenure: 0, // years
  };
  let [emi, setEMI] = useState(initialValues);

  let handleCompute = () => {
    if (emi.loanAmount < 100000) {
      alert("Loan Amount must be 1 Lakh atleast");
      setEMI(initialValues);
      cost(0,0,0,0);
      return;
    }
    if (emi.Rate_of_interest > 30 || emi.loanTenure > 30) {
      alert("Rate of interest / Loan Tenure shouldn't be more than 30");
      setEMI(initialValues);
      cost(0,0,0,0);
      return;
    }

    let P = emi.loanAmount;
    let R = emi.Rate_of_interest / 12 / 100;
    let N = emi.loanTenure * 12;
    let monthlyEMI = 0 ;
    if (R === 0)
      monthlyEMI = Math.round(P / N);
    else
      monthlyEMI = Math.round((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));
    let totalInterest = monthlyEMI * N - P;
    let totalAmount = monthlyEMI * N;
    console.log(P, R, N);
    console.log(` EMI - ${monthlyEMI} \n interest - ${totalInterest} \n Total - ${totalAmount}`);
    cost(P, monthlyEMI, totalInterest, totalAmount);
  };

  return (
    <>
      <form>
        <div className="d-block">
          <div className="p-2">
            <label for="loanAmount" className="form-label">
              loan Amount
            </label>
            <input
              className="form-control me-2"
              type="number"
              placeholder="loanAmount"
              aria-label="number"
              id="loanAmount"
              name="loanAmount"
              value={emi.loanAmount}
              onChange={(event) =>
                setEMI({ ...emi, loanAmount: event.target.value })
              }
            />
          </div>
          <div className="p-2">
            <label for="roi" className="form-label">
              Rate of interest
            </label>
            <input
              className="form-control me-2"
              type="number"
              placeholder="roi"
              aria-label="number"
              id="roi"
              name="roi"
              value={emi.Rate_of_interest}
              onChange={(event) =>
                setEMI({ ...emi, Rate_of_interest: event.target.value })
              }
            />
          </div>
          <div className="p-2">
            <label for="loanTenure" className="form-label">
              loan Tenure
            </label>
            <input
              className="form-control me-2"
              type="number"
              placeholder="loanTenure"
              aria-label="number"
              id="loanTenure"
              name="loanTenure"
              value={emi.loanTenure}
              onChange={(event) =>
                setEMI({ ...emi, loanTenure: event.target.value })
              }
            />
          </div>
          <div className="p-2 text-endd">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => handleCompute()}
            >
              Compute =
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
