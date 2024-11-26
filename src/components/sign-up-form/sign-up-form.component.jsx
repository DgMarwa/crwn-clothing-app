import { useState } from 'react';

import FormInput from '../form-input/form-input.component'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../routes/utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';

import button from '../button/button.component';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
} 




const SignUpForm = () => {
 const [formFields, setFormFields] = useState(defaultFormFields);
 const { displayName, email, password, confirmPassword } = formFields;
 
 console.log(formFields);

 const resetFormFields = () => {
    setFormFields(defaultFormFields )
 }

const handleSubmit = async (event) => {
    event.preventDefault();
 
    if (password  !== confirmPassword ) {

        alert("passwords do not match ");
        return;
    }

    try {

        const { user } = await createAuthUserWithEmailAndPassword(
            email,
             password);

await createUserDocumentFromAuth (user, { displayName});
resetFormFields();     
    }
     catch(error) {
        if (error.code =='auth/email-alerady-in-use'){
            alert ('cannot create user, email alreday in use');
        } else {


        console.log('user creation encountered an error', error); 
    }

    }

};

 const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value });

 };
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account ?</h2>
            <span> Sign up with your email and password</span>
            <from onSubmit= {handleSubmit}>
                <FormInput
                label="Display Name"
                 type="text"
                  required 
                  onChange={handleChange}  
                  name="displayName" value={displayName} />


         
                <FormInput
                label="email"
                 type="email" 
                 
                required
                 onChange={handleChange} 
                 name="email"/>

                
                <FormInput 
                 label="Password"
                type="password" 
                required 
                onChange={handleChange}
                 name="password" />

             
                <FormInput 
                 label="ConfirmPassword"
                type="password"
                 required 
                 onChange={handleChange} 
                 name="confirmPassword" />
                <button  type ="submit">
                    Sign Up

                </button>

            </from>
        </div>
    );
}; 

export default SignUpForm;
