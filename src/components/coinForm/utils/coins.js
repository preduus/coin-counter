
const getRandomId = () => {
    return Math.random().toString(36).substr(2, 9)
}

const getCoinValue = (v) => {
    return parseFloat(v) / 100
}

const defaultCoins = {
    "BRL": {
        "1 Real": { id: getRandomId(), type: "Real", symbol: "R$", amount: 1, value: 100, decimal: getCoinValue(100) },
        "50 Centavos": { id: getRandomId(), type: "Centavos", symbol: "R$", amount: 50, value: 50, decimal: getCoinValue(50) },
        "25 Centavos": { id: getRandomId(), type: "Centavos", symbol: "R$", amount: 25, value: 25, decimal: getCoinValue(25) },
        "10 Centavos": { id: getRandomId(), type: "Centavos", symbol: "R$", amount: 10, value: 10, decimal: getCoinValue(10) },
        "5 Centavos": { id: getRandomId(), type: "Centavos", symbol: "R$", amount: 5, value: 5, decimal: getCoinValue(5) }
    },
    "USD": {
        "1 Dollar": { id: getRandomId(), type: "Dollar", symbol: "$", amount: 1, value: 100, decimal: getCoinValue(100) },
        "50 Cents": { id: getRandomId(), type: "Cents", symbol: "$", amount: 50, value: 50, decimal: getCoinValue(50) },
        "25 Cents": { id: getRandomId(), type: "Cents", symbol: "$", amount: 25, value: 25, decimal: getCoinValue(25) },
        "10 Cents": { id: getRandomId(), type: "Cents", symbol: "$", amount: 10, value: 10, decimal: getCoinValue(10) },
        "5 Cents": { id: getRandomId(), type: "Cents", symbol: "$", amount: 5, value: 5, decimal: getCoinValue(5) }
    },
    "EUR": {
        "2 Euro": { id: getRandomId(), type: "Euro", symbol: "€", amount: 2, value: 200, decimal: getCoinValue(200) },
        "1 Euro": { id: getRandomId(), type: "Euro", symbol: "€", amount: 1, value: 100, decimal: getCoinValue(100) },
        "50 Cents": { id: getRandomId(), type: "Cents", symbol: "€", amount: 50, value: 50, decimal: getCoinValue(50) },
        "20 Cents": { id: getRandomId(), type: "Cents", symbol: "€", amount: 20, value: 20, decimal: getCoinValue(20) },
        "10 Cents": { id: getRandomId(), type: "Cents", symbol: "€", amount: 10, value: 10, decimal: getCoinValue(10) },
        "5 Cents": { id: getRandomId(), type: "Cents", symbol: "€", amount: 5, value: 5, decimal: getCoinValue(5) },
        "2 Cents": { id: getRandomId(), type: "Cents", symbol: "€", amount: 2, value: 2, decimal: getCoinValue(2) },
        "1 Cents": { id: getRandomId(), type: "Cents", symbol: "€", amount: 1, value: 1, decimal: getCoinValue(1) }
    }
}

export default defaultCoins;