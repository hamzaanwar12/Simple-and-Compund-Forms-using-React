import "./CompoundForm.css"
import useInput from './InputContext';

const CompoundForm = () => {
    const {
        name: userName,
        touched: isTouched,
        isValid: isnameValid,
        handleBlur: HandleBlur,
        classSlector: hasNameError,
        handleChange: handleChangeEvent,
        handleSubmit: submitNameHandler
    } = useInput((value) => value.trim().length > 0)
    
    const {
        name: email,
        touched: isMailTouched,
        isValid: isMailValid,
        handleBlur: mailHandleBlur,
        classSlector: hasMailError,
        handleChange: mailHandleChangeEvent,
        handleSubmit: submitLastNameHandler
    } = useInput((value) => value.includes("@"))
    
    const {
        name: userLastName,
        touched: isLastNameTouched,
        isValid: isLastNameValid,
        handleBlur: lastNameHandleBlur,
        classSlector: hasLastNameError,
        handleChange: lastNameHandleChangeEvent,
        handleSubmit: submitMailHandler
    } = useInput((value) => value.trim().length > 0)

    const handleSubmit = (event) => {
        event.preventDefault()
        submitMailHandler()
        submitLastNameHandler()
        submitNameHandler()
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <div className="input">
                <div className="module">
                    <input type="text" className={hasNameError?"red":"blue" } placeholder={"Enter First Name"} onChange={handleChangeEvent} onBlur={HandleBlur} />
                    {hasNameError && <span>*First Name can't be Empty</span>}
                </div>    
                
                <div className="module">
                    <input type="text" className={hasLastNameError?"red":"blue"} placeholder={"Enter Name"} onChange={lastNameHandleChangeEvent} onBlur={lastNameHandleBlur} />
                    {hasLastNameError && <span>*Last Name can't be Empty</span>}
                </div>
            
            </div>

            <div className="email">
                <input type="email" className={hasMailError?"red":"blue"} placeholder={"Enter E-mail"} onChange={mailHandleChangeEvent} onBlur={mailHandleBlur} />
                {hasMailError &&  <span>*Mail can't be without @</span>}
            </div>
            <div className="button">
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
}

export default CompoundForm