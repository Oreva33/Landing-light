import React, {useState} from "react";
import './App.css'
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import MasterCard from "./components/MasterCard";
import PaymentInfo from "./components/PaymentInfo";
import HorizonLine from "./components/HorizonLine";
import ExpenseDetails from "./components/ExpenseDetails";

const App = () => {
  const [inputData, setinputData] = useState("")

  const dataHandler =(data) =>{
    //console.log(data)
    setinputData(data)
  }

  const cardNo = inputData.cardNum
  const expedDate = inputData.expiredDate
  return (
    <div>
      <Header />
      <PaymentInfo/>
      <div className="main-wrapper">
      <MasterCard className="master-card1" date ={expedDate} cardNumber = {cardNo}/>
      <InputForm className="input-form1" onData = {dataHandler}/>
      </div>
      <HorizonLine/>
      <ExpenseDetails/>
    </div>
  );
};

export default App;
