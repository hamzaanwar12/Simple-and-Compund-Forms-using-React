import "./SimpleForm.css"
import useInput from './InputContext';

const SimpleForm = () => {
    const {
        name: userName,
        touched: isTouched,
        isValid: isnameValid,
        handleBlur: HandleBlur,
        classSlector: className,
        handleChange: handleChangeEvent
    } = useInput((value) => value.trim().length > 0)



    const handleSubmit = (event) => {
        event.preventDefault()
    }


    /*
    const [name,setname] = useState("")
    const [touched,setTouched] = useState(false)
    
    let emailIsValid = name.trim().length>0 && touched;
    let classSlector = touched && !emailIsValid?"red":"blue"
    
    const handleBlur = ()=>
    {
        if(!touched)
        setTouched(true);
    }
    
    const handleChange = (event)=>
    {
        if(event.target.value.trim().length > 0)  
        emailIsValid =  true;
        else
        emailIsValid =  false;
        
        setTouched(true);
        setname(event.target.value)
    }
    
    */
    return (

        /*
        <form onSubmit = {handleSubmit}>
          <div className="input">
            <input type="text" className={classSlector} placeholder = {"Enter Name"} onChange={handleChange} onBlur = {handleBlur}/>
            {!emailIsValid && touched && <span>*Fill this section</span>}
          </div>
          <div className="button">
            <button type='submit'>Submit</button>
          </div>
        </form>
        */
        <form onSubmit={handleSubmit}>
            <div className="input">
                <input type="text" className={className} placeholder={"Enter Name"} onChange={handleChangeEvent} onBlur={HandleBlur} />
                {!isnameValid && isTouched && <span>*Fill this section</span>}
            </div>
            <div className="button">
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
}

export default SimpleForm