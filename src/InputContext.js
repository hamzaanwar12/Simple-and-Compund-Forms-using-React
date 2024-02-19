import {useState} from "react";

const useInput = (validate)=>
{
    const [value,setValue] = useState("")
    const [touched,setTouched] = useState(false)
  
    let isValid = validate(value)  && touched;
    let classSlector = touched && !isValid

    const handleBlur = ()=>
    {
      if(!touched)
        setTouched(true);
    }
    
    const handleChange = (event)=>
    {
      if(validate(event.target.value))  
        isValid =  true;
      else
        isValid =  false;
      
      setTouched(true);
      setValue(event.target.value)
    }

    const handleSubmit = ()=>
    {
        setTouched(true);
    }

    return(
        {
            value,
            touched,
            isValid,
            handleBlur,
            classSlector,
            handleChange,
            handleSubmit
        }
    )
}

export default useInput;