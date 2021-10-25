import { CoinProvider } from "../contexts/coin";
import CoinForm from "./coinForm";
import CoinSummary from "./coinSummary";


const App = () => {

    return <CoinProvider>
        <section id="coin" className="contact-section container-coin">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
                        <div className="section-title text-center mb-50">
                            <h3 className="mb-15">Coin Counter</h3>
                            <p>Count your coins in an easy and simple way.</p>
                        </div>
                    </div>
                </div>
                <CoinSummary/>
                <CoinForm/>
            </div>
        </section>
    </CoinProvider>
}

export default App;
