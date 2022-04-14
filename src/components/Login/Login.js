
import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>please login</h2>
            <div style={{margin:'20px'}}>
            <button>Google Sign In</button>
            </div>
            <form>
            <input type="email" placeholder='Your Email'/> 
             <br></br> 
             <input type="password" placeholder='Your password'/> 
             <br></br> 
             <input type="submit" value='Login'/>  
         </form> 
        </div>
    );
};

export default Login;










