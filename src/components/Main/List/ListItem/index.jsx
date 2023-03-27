import '../../../../styles/globalStyles.css'
import '../../../../styles/list.css'

const ListItem = ({ money, removeMoneyListItem }) => {

    // const moneyConverterd = money.valueMoney.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    const RenderList = () => {
        if (money.typeMoney === 'Entrada') {
            return (
                <li className='flex li-min-width'>
                    <div className='list-description'>
                        <h3>{money.descriptionMoney}</h3>
                        <p>{money.typeMoney}</p>
                    </div>
                    <div className='list-value'>
                        <p>R$ {money.valueMoney}</p>
                        <button onClick={() => removeMoneyListItem(money.id)}>Excluir</button>
                    </div>
                </li>
            )
        } else {
            return (
                <li className='flex li-min-width li-exit'>
                    <div className='list-description'>
                        <h3>{money.descriptionMoney}</h3>
                        <p>{money.typeMoney}</p>
                    </div>
                    <div className='list-value'>
                        <p>R$ {money.valueMoney}</p>
                        <button onClick={() => removeMoneyListItem(money.id)}>Excluir</button>
                    </div>
                </li>
            )
        }
    }

    return (
        <RenderList />
    )
}

export default ListItem