import {useState} from "react";

const { createContext } = require("react");

export const CoinContext = createContext({});

export const CoinProvider = ({ children }) => {

    const [summary, setSummary] = useState([])

    const handleSummary = item => {
        setSummary(items => [...items, item])
    }

    const handleRemoveSummary = id => {
        const filter = summary.filter((s) => {
            return s.id !== id
        })
        setSummary(filter)
    }

    return <CoinContext.Provider value={{summary, handleSummary, handleRemoveSummary}}>
        {children}
    </CoinContext.Provider>
}