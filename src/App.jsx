import React, { useReducer } from "react";

const initialState = {
  bal: 0,
  loan: 0,
  open: false,
  close: true,
  isLoan: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { bal: 500, open: true, close: false, loan: 0, isLoan: false };
    case "deposit":
      return { ...state, bal: state.bal + action.payload };
    case "withdraw":
      if (state.balance >= action.payload)
        return { ...state, bal: state.bal - action.payload };
    case "loan":
      if (!isLoan && action.payload <= 10000) {
        return {
          ...state,
          isLoan: true,
          bal: state.bal + action.payload,
          loan: action.payload,
        };
      }
    case "payloan":
      if (state.bal >= state.loan) {
        return {
          ...state,
          loan: 0,
          bal: state.bal - state.loan,
          isLoan: false,
        };
      }
    case "close":
      if (state.bal === 0 && state.loan === 0) {
        return initialState;
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="body">
      <Detail />
      <Start />
      <Main>
        <Deposit />
        <Withdrawal />
        <Loan />
        <Payloan />
        <CloseAcc />
      </Main>
    </div>
  );
}

function Detail() {
  return (
    <div className="detail">
      <h1>balance : X</h1>
      <h1>loan : Y</h1>
    </div>
  );
}
function Main({ children }) {
  return <div className="main">{children}</div>;
}

function Start() {
  return <button className="open btn">Open Account</button>;
}

function Deposit() {
  return (
    <div className="deposit">
      <input type="number" />
      <button className="dep-btn btn">deposit</button>
    </div>
  );
}

function Loan() {
  return (
    <div>
      <input type="number" />
      <button className="loan-btn btn">loan</button>
    </div>
  );
}

function Withdrawal() {
  return (
    <div>
      <input type="number" />
      <button className="with-btn btn">Withdraw</button>
    </div>
  );
}

function Payloan() {
  return <button className="pay-btn btn">Pay Loan</button>;
}

function CloseAcc() {
  return <button className="close-btn btn">Close Account</button>;
}
export default App;
