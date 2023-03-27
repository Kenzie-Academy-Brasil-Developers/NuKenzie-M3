import '../../../styles/globalStyles.css';
import ListItem from "./ListItem";

const List = ({ moneyList, removeMoneyListItem }) => {

    return (
        <div className='ul-list'>
            <h2>Resumo Financeiro</h2>
            {moneyList.length > 0 ? (
                <ul>
                    {moneyList.map((money) => {
                        return <ListItem key={money.id} money={money} removeMoneyListItem={removeMoneyListItem} />
                    })}
                </ul>
            ) : (
                <h2>Você ainda não possui nenhum lançamento</h2>
            )}

        </div>
    )
}

export default List;