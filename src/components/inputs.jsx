export function Input({
  loanAmountRef,
  rateOfInterestRef,
  loanTenureRef,
  cost
}) {
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
              ref={loanAmountRef}
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
              ref={rateOfInterestRef}
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
              ref={loanTenureRef}
            />
          </div>
          <div className="p-2 text-endd">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => cost()}
            >
              Compute =
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
