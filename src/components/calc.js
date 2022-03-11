import React, { useState } from "react";
let userValue = 0
const Einzahlen = () => {
    const [amount, setAmount] = useState(0)
    // const getData = (e) => {
    //     console.log("clicked")
    //     setAmount(e.target.value)
    // }

    console.log(amount)

    return (
        <div className="konto">
            <p>Dein Girokonto</p>
            <div className="saldo">{amount}€</div>
            <input type="number" name="num" id="betrag" className='geldbetrag' onChange={(e) => userValue = Number(e.target.value)} />
            <button className='einzahlen' onClick={e => setAmount(amount + userValue)}>Einzahlen</button>

            <button className='auszahlen' onClick={e => setAmount(amount - userValue)}>Auszahlen</button>
        </div>
    )
}
export default Einzahlen

// value={amount} onChange={(e) => setAmount(e.target.value)}