import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { useHistory } from 'react-router';
const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formLogin,setFormLogin] = useState({
        email:"",
        password:""
    })
    const handleChange = e => {
        setFormLogin(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const submit = () => {
        console.log(formLogin);
        dispatch(login(formLogin))
        history.push('/user/matches');
    }
    return (
        <div id="register">
             <div>
                <h2 className="section-title text-center">
                    התחבר למשתמש קיים
                </h2>
                <div className="bottom-line"></div>
                <p className="text-center section-content">הכנס את האימייל שלך והסיסמא</p>
                <form className="my-2">
                    <div id="form-fields">          
                        <input type="email" id="email" name="email" placeholder="הכנס את המייל שלך 📩" className="input-email" onChange={handleChange}/>
                        <input type="password" id="password" name="password" placeholder="הכנס סיסמא" className="input" onChange={handleChange}/>
                    </div>
                  
                </form>
                <div className="form-actions">
                        <button className="btn btn-large btn-primary" onClick={submit}>התחבר</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
