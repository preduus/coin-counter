import {useContext, useEffect, useState} from "react";
import {CoinContext} from "../../contexts/coin";

const SummaryTable = ({data}) => {

    const { handleRemoveSummary } = useContext(CoinContext)

    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const sum = data.reduce((c, s) => {
            return parseFloat(c) + parseFloat(s.sum)
        }, 0)

        const quantity = data.reduce((c, s) => {
            return parseInt(c + s.quantity)
        }, 0)

        setTotal(sum)
        setQuantity(quantity)
    }, [data])

    const remove = (e, id) => {
        e.preventDefault()
        handleRemoveSummary(id)
    }

    return <table className="table">
        <thead>
        <tr>
            <th scope="col">Coin Label</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
        </tr>
        </thead>
        <tbody>
        {
            data.map((s, index) => {
                return <tr key={index}>
                    <th scope="row">{s.label}</th>
                    <td>{s.quantity}</td>
                    <td>{s.symbol}{s.sum}</td>
                    <td><a href={":;"} onClick={(e) => remove(e, s.id)}>Remove</a></td>
                </tr>
            })
        }
        </tbody>
        <tfoot>
            <tr>
                <th scope="row">Total</th>
                <th>{quantity}</th>
                <th>{total.toFixed(2)}</th>
                <th>&nbsp;</th>
            </tr>
        </tfoot>
    </table>
}

export default SummaryTable;