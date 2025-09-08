export function Results({principle, emi, interest, amount})
{
  return (
       <div className="emi-results">
            <div className="emi-item">
                <h4 className="emi-label">Principal Amount</h4>
                <p className="emi-value emi-principal" id="principalDisplay">{principle}</p>
            </div>
            
            <div className="emi-item">
                <h4 className="emi-label">Monthly EMI</h4>
                <p className="emi-value emi-monthly" id="monthlyEMI">{emi}</p>
            </div>
            
            <div className="emi-item">
                <h4 className="emi-label">Total Interest</h4>
                <p className="emi-value emi-interest" id="totalInterest">{interest}</p>
            </div>
            
            <div className="emi-item">
                <span className="emi-label">Total Amount</span>
                <span className="emi-value emi-total" id="totalAmount">{amount}</span>
            </div>
        </div>
  )
}