import { useState } from "react";
import '../../../styles/form.css'

const Form = ({ addMoneyListItem }) => {

    const [descriptionMoney, setdescriptionMoney] = useState('')
    const [valueMoney, setValueMoney] = useState('')
    const [typeMoney, setTypeMoney] = useState('')


    const sendInfoMoney = (event) => {
        event.preventDefault()
        const formData = { descriptionMoney, valueMoney, typeMoney }
        addMoneyListItem(formData)
    }


    return (

        <form className="form-div flex flex-column" onSubmit={sendInfoMoney}>
            <label htmlFor="description">Descrição</label>
            <textarea name="description" value={descriptionMoney} type="text" placeholder="Digite aqui sua descrição" onChange={(e) => setdescriptionMoney(e.target.value)} />
            <span><small>Ex: Compra de roupas</small></span>
            <label htmlFor="value">Valor (R$)</label>
            <input name="value" value={valueMoney} placeholder="1" type="number" step="0.01" min="0.01" onChange={(e) => setValueMoney(e.target.value)} />

            <label htmlFor="value_type">Tipo de valor</label>
            <select name="value_type" value={typeMoney} id="value_type" onChange={(e) => setTypeMoney(e.target.value)}>
                <option disabled value="">Selecione tipo</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saida</option>
            </select>

            <button type="submit">Inserir valor</button>
        </form>

    )
}

export default Form;