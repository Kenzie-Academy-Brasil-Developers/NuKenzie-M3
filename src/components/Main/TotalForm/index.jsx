import '../../../styles/globalStyles.css'
import '../../../styles/totalForm.css'

const TotalForm = ({balance}) => {
    return (
        <div className="div--total flex flex-between">
            <div className='flex flex-column gap-total'>
                <span><strong>Valor total:</strong></span>
                <p>O valor se refere ao saldo</p>
            </div>
            <p>{balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </div>
    )
}

export default TotalForm;