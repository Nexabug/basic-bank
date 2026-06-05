import React, { useReducer, useState } from "react";

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
      if (state.bal >= action.payload) {
        return { ...state, bal: state.bal - action.payload };
      }
      return state;
    case "loan":
      if (!state.isLoan && action.payload <= 10000) {
        return {
          ...state,
          isLoan: true,
          bal: state.bal + action.payload,
          loan: action.payload,
        };
      }
      return state;
    case "payloan":
      if (state.bal >= state.loan) {
        return {
          ...state,
          loan: 0,
          bal: state.bal - state.loan,
          isLoan: false,
        };
      }
      return state;
    case "close":
      if (state.bal === 0 && state.loan === 0) {
        return initialState;
      }
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { bal, loan, open, close, isLoan } = state;

  function handleStart() {
    dispatch({ type: "open" });
  }
  function handleDeposit(num) {
    dispatch({ type: "deposit", payload: num });
  }
  function handleWithdraw(num) {
    dispatch({ type: "withdraw", payload: num });
  }
  function handleLoan(num) {
    dispatch({ type: "loan", payload: num });
  }
  function handlePay() {
    dispatch({ type: "payloan" });
  }
  function handleClose() {
    dispatch({ type: "close" });
  }
  let content;

  if (!open) {
    content = <Start handle={handleStart} />;
  } else {
    content = (
      <>
        <Deposit handle={handleDeposit} />
        <Withdrawal handle={handleWithdraw} />
        <Loan handle={handleLoan} />
        <Payloan handle={handlePay} />
        <CloseAcc handle={handleClose} />
      </>
    );
  }

  return (
    <div className="body">
      <Detail state={state} />
      <Main>{content}</Main>
    </div>
  );
}

function Detail({ state }) {
  return (
    <div className="detail">
      <h1>balance : {state.bal} </h1>
      <h1>loan : {state.loan}</h1>
    </div>
  );
}
function Main({ children }) {
  return <div className="main">{children}</div>;
}

function Start({ handle }) {
  return (
    <button className="open btn" onClick={handle}>
      Open Account
    </button>
  );
}

function Deposit({ handle }) {
  const [num, setNum] = useState(0);
  return (
    <div className="deposit">
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button
        className="dep-btn btn"
        onClick={() => {
          handle(num);
          setNum(0);
        }}
      >
        deposit
      </button>
    </div>
  );
}

function Loan({ handle }) {
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button
        className="loan-btn btn"
        onClick={() => {
          handle(num);
          setNum(0);
        }}
      >
        loan
      </button>
    </div>
  );
}

function Withdrawal({ handle }) {
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button
        className="with-btn btn"
        onClick={() => {
          handle(num);
          setNum(0);
        }}
      >
        Withdraw
      </button>
    </div>
  );
}

function Payloan({ handle }) {
  return (
    <button className="pay-btn btn" onClick={handle}>
      Pay Loan
    </button>
  );
}

function CloseAcc({ handle }) {
  return (
    <button className="close-btn btn" onClick={handle}>
      Close Account
    </button>
  );
}
export default App;
