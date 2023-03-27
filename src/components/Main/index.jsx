import Form from "./Form"
import List from "./List"
import TotalForm from "./TotalForm"

const Main = ({ addMoneyListItem, moneyList, removeMoneyListItem, balance }) => {
    return (
        <main className="container flex-min-width">
            <section className="section-form">
                <Form addMoneyListItem={addMoneyListItem} />
                <TotalForm balance={balance} />
            </section>
            <section className="section-list-itens">
                <List removeMoneyListItem={removeMoneyListItem} moneyList={moneyList} />
            </section>
        </main>
    )
}

export default Main