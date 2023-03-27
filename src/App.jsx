import './styles/reset.css'
import './styles/globalStyles.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'


import { v4 as uuidv4 } from 'uuid'


function App() {

  const [moneyList, setMoneyList] = useState([]);


  const moneyListValueEnter = moneyList.filter(money => money.typeMoney === "Entrada")
  const moneyListValueExit = moneyList.filter(money => money.typeMoney === "Saída")


  const totalEnterValue = moneyListValueEnter.reduce((previousValue, element) => {
    const valueConverter = Number(element.valueMoney)
    return previousValue + valueConverter
  }, 0)

  const totalExitValue = moneyListValueExit.reduce((previousValue, element) => {
    const valueConverter = Number(element.valueMoney)
    return previousValue + valueConverter
  }, 0)

  const totalBalance = (entered, exit) => {
    return entered - exit
  }

  const balance = totalBalance(totalEnterValue, totalExitValue)

  const addMoneyListItem = (formDataMoney) => {
    const newListMoney = { ...formDataMoney, id: uuidv4() }

    if (newListMoney.descriptionMoney === '' || newListMoney.valueMoney === '' || newListMoney.typeMoney === '') {
      alert('Favor, preencher os campos')
    } else {
      const newList = [...moneyList, newListMoney]
      setMoneyList(newList)
    }

  }

  const removeMoneyListItem = (moneyId) => {
    const newListMoney = moneyList.filter(money => money.id !== moneyId)
    setMoneyList(newListMoney)
  }


  return (

    <div className="App">
      <Header />
      <Main balance={balance} moneyList={moneyList} addMoneyListItem={addMoneyListItem} removeMoneyListItem={removeMoneyListItem} />
    </div>
  )
}

export default App
