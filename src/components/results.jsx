export function Results({principle, emi, interest, amount})
{
  return (
       <div class="emi-results">
            <div class="emi-item">
                <h4 class="emi-label">Principal Amount</h4>
                <p class="emi-value emi-principal" id="principalDisplay">{principle}</p>
            </div>
            
            <div class="emi-item">
                <h4 class="emi-label">Monthly EMI</h4>
                <p class="emi-value emi-monthly" id="monthlyEMI">{emi}</p>
            </div>
            
            <div class="emi-item">
                <h4 class="emi-label">Total Interest</h4>
                <p class="emi-value emi-interest" id="totalInterest">{interest}</p>
            </div>
            
            <div class="emi-item">
                <span class="emi-label">Total Amount</span>
                <span class="emi-value emi-total" id="totalAmount">{amount}</span>
            </div>
        </div>
  )
}