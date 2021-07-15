import React from 'react'
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../redux/actions/userActions';

const MatchItem = ({person}) => {
    const dispatch = useDispatch();
    const favoriteHandler = () => {
        dispatch(addToFavorite(person));
        console.log("person: " , JSON.stringify(person))
    }
   
    return (
        <div className="match-item">
            <img src={person.img} alt="ישראל ישראלי"/> 
            <div className="match-content">
                        <h4>{person.name}</h4>
                        <h5>{person.phone}</h5>
                        <h5>{person.email}</h5>
                        <h5>{person.status}</h5>
                        <p>{person.description}</p>
                    </div>
                    <div className="match-actions">
                        <span className="mx-2" onClick={favoriteHandler}>
                            <i className="fas fa-star fa-2x" ></i>
                        </span>
                        <i className="fas fa-user-minus fa-2x"></i> 
                    </div>
        </div>
    )
}

export default MatchItem;
