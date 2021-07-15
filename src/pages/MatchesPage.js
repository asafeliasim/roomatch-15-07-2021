import React from 'react'
import person1 from '../img/person.png';
import person2Image from '../img/person2.png';
import {matches} from '../data/matchesData';
import MatchItem from '../components/MatchItem';


const MatchesPage = () => {
    console.log(matches);
    return (
        <div id="matches">
            <h2 className="section-title">ההתאמות שלך</h2>
            <div className="bottom-line" ></div>
            <div>
                {matches.length > 0 && matches.map((person) => {
                    return <MatchItem person={person} key={person.id}/>
                })}
            </div>
        </div>
    )
}

export default MatchesPage
