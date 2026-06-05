import React from "react";

function App() {
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
