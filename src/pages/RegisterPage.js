import React,{useState} from 'react'
import Alert from '../components/Alert';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/userActions';

const LoginPage = () => {
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const [formObject,setFormObject] = useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmedPassword:'',
        location:'',
        age:'',
        budget:''
    });

    const handleChane = (e) => {
        setFormObject(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const submit = (e) => {
        e.preventDefault();

        if(formObject.password !== formObject.confirmedPassword){
            setError('הסיסמאות לא תואמות.');
            return;
        }
        else{
            dispatch(register(formObject));
        }

    }

    const {name,email,phone,password,confirmedPassword,location,age,budget} = formObject;
    return (
        <>
             <div id="register">
                <h2 className="section-title text-center">
                    הירשם כאן
                </h2>
                <div className="bottom-line"></div>
                <p className="text-center section-content">אנא מלא את הפרטים הבאים</p>
                <form className="my-2">
                    <div id="form-fields">
                        <input type="text" id="name" name="name" placeholder="הכנס את שמך המלא 📛" className={name ? "input-fill" : null}  onChange={handleChane}/>
                        <input type="email" id="email" name="email" placeholder="הכנס את המייל שלך 📩" className={email ? "input-fill" : null}   onChange={handleChane}/>
                        <input type="type" id="phone" name="phone" placeholder="הכנס את מספר הטלפון שלך 📱" className={phone ? "input-fill" : null}   onChange={handleChane}/>
                        <input type="password" id="password" name="password" placeholder="הכנס סיסמא" className={password ? "input-fill" : null} onChange={handleChane}/>
                        <input type="password" id="confirmedPassword" name="confirmedPassword" placeholder="הכנס את הסיסמא שוב" className={confirmedPassword ? "input-fill" : null}  onChange={handleChane}/>
                        <input type="text" id="location" name="location" placeholder="הכנס איזור מגורים רצוי 🌇"  className={location ? "input-fill" : null}   onChange={handleChane}/>
                        <input type="text" id="age" name="age" placeholder="הכנס את גילך 🧒" className={age ? "input-fill" : null}   onChange={handleChane}/>
                        <input type="text" id="budget" name="budget" placeholder="הכנס את התקציב שלך 💰" className={budget ? "input-fill" : null}   onChange={handleChane}/>
                        
                    </div>
                    <div className="form-actions">
                        <button className="btn btn-large btn-primary" onClick={submit}>אישור</button>
                    </div>
                </form>
                {error && <Alert alert={error} type="danger"/>}
            </div>
        </>
    )
}

export default LoginPage;
