import React from 'react';
import './sign-in.styles.scss';
import '../form-input/form-input.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: '', password: '' });
      };

    render() {
        return (
            <div className="sign-in-container">
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} handleChange={this.handleChange} required/>
                       
                    <FormInput name="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;