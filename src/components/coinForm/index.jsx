import {ErrorMessage, Field, Form, Formik} from "formik";

import Coinbase from './utils/coins'
import {useContext, useState} from "react";
import {CoinContext} from "../../contexts/coin";
import FormAnimatedButton from "./button";

const CoinForm = () => {

    const {summary, handleSummary} = useContext(CoinContext)
    const [errorHandler, setErrorHandler] = useState({message: null})
    const [buttonState, setButtonState] = useState(null)

    const validate = values => {
        const errors = {}

        if (!values.coinId || values.coinId === "") {
            errors.coinId = "Coin is required."
        }

        if (!values.quantity || typeof parseInt(values.quantity) !== "number" || parseInt(values.quantity) === 0) {
            errors.quantity = "Quantity is required."
        }
        return errors
    }

    const handleSubmit = async (e, {setSubmitting}) => {
        const alreadyAdded = (id) => {
            const has = summary.find((hs) => {
                return hs.id === id
            })
            return typeof has !== "undefined"
        }

        setErrorHandler({message: null})
        setButtonState("pending")

        /** button delay effect */
        await new Promise((resolve => setTimeout(resolve, 700)))

        const currencyCoin = Coinbase[e.currency]
        const coinInfo = Object.keys(currencyCoin).map((k) => {
            return Object.assign(currencyCoin[k], {"label": k})
        }).find((i) => {
            return i.id === e.coinId
        })

        if (!alreadyAdded(e.coinId)) {
            handleSummary(Object.assign(coinInfo, {
                "coinId": e.coinId,
                "quantity": parseInt(e.quantity),
                "sum": (e.quantity * coinInfo.decimal).toFixed(2)
            }))
            setButtonState("success")
        } else {
            setButtonState("fail")
            setErrorHandler({message: "Coin already added. Please, update it."})
        }
        setButtonState("finished")
        setSubmitting(false)
    }

    return <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
            <div className="coin-form-wrapper">
                <Formik enableReinitialize initialValues={{currency: "BRL", coinId: "", quantity: 0}}
                        validate={validate} onSubmit={handleSubmit}>
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          isSubmitting
                      }) => (
                        <Form>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Currency</label>
                                    <div className="single-input">
                                        <select
                                            id="currency"
                                            name="currency"
                                            value={values.currency}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-select"
                                        >
                                            <option value="BRL">BRL</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                        </select>
                                        <i className="lni lni-dollar"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label>Coin</label>
                                    <div className="single-input">
                                        <select
                                            id="coinId"
                                            name="coinId"
                                            value={values.coinId}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-select"
                                        >
                                            <option value="">Select</option>
                                            {
                                                Object.keys(Coinbase[values.currency]).map((coinKey, index) => {
                                                    const {id, amount, type} = Coinbase[values.currency][coinKey]
                                                    return <option key={index} value={id}>{`${amount} ${type}`}</option>
                                                })
                                            }
                                        </select>
                                        <i className="lni lni-coin"/>
                                    </div>
                                    <ErrorMessage name="coinId" component="div"/>
                                </div>
                                <div className="col-md-4">
                                    <label>Quantity</label>
                                    <div className="single-input">
                                        <Field
                                            type="text"
                                            id="quantity"
                                            name="quantity"
                                            value={values.quantity}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-input"
                                            placeholder="Quantity"/>
                                        <i className="lni lni-select"/>
                                    </div>
                                    <ErrorMessage name="quantity" component="div"/>
                                </div>
                                <div className="row d-flex justify-content-center text-danger">
                                    {errorHandler.message ?? errorHandler.message}
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <FormAnimatedButton buttonState={buttonState} isSubmitting={isSubmitting}/>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
}

export default CoinForm;