import {createRef, useEffect, useState} from "react";

const FormAnimatedButton = ({buttonState, isSubmitting}) => {

    const stateClasses = {
        pending: "loading-btn--pending",
        success: "loading-btn--success",
        fail: "loading-btn--fail"
    }

    const [lastState, setLastState] = useState(null);

    const handleState = async () => {
        if (typeof buttonState !== "undefined") {
            if (buttonState === "finished")
                await new Promise((resolve => setTimeout(resolve, 3000)))
            setLastState(buttonState !== "finished" ? stateClasses[buttonState] : null)
        }
    }

    useEffect(() => {
        handleState()
    }, [buttonState])

    return <div className="form-button">
        <div className="loading-btn-wrapper">
            <button type="submit" className={`loading-btn ${lastState ?? lastState}`} disabled={isSubmitting}>
                <span className="loading-btn__text"><i className="lni lni-plus"/> Add</span>
            </button>
        </div>
    </div>
}

export default FormAnimatedButton;