import {useContext} from "react";
import {CoinContext} from "../../contexts/coin";
import SummaryTable from "./table";


const CoinSummary = () => {

    const { summary } = useContext(CoinContext)

    return <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
            {summary.length > 0 && <SummaryTable data={summary} />}
        </div>
    </div>
}

export default CoinSummary;