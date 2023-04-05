import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler)=>{
    const [values,setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit=(e)=>{
        e.preventDefault();

        onSubmitHandler(values);
    };

    const changeData = (newData) => {
       
        const initialKeys = Object.keys(initialValues);
        const newKeys = Object.keys(newData);
        const keysMatch = initialKeys.every((key) => newKeys.includes(key));
      
        if (keysMatch) {
          setValues(newData);
        } else {
          return
        }
        setValues(newData);
      };

    return {
        values,
        changeHandler,
        onSubmit,
        changeData,
    }

}