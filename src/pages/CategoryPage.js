import React,{useState} from 'react';
import CategoryItem from '../components/CategoryItem';
import { hospitalityOptions ,smokingOptions ,petsOptions, cleaningOptions} from '../data/categoriesData';




function CategoryPage({title,answers}) {
    const [selectObject,setSelectObject] = useState({
        hospitality:"0",
        smoking:"0",
        pets:"0",
        cleaning:"0"
    });

    const handleChane = (e) => {
        setSelectObject(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const submit = () => console.log(selectObject);
    return (
        <div id="category">
            <CategoryItem options={hospitalityOptions} title="אירוח בדירה" handleChane={handleChane}/>
            <CategoryItem options={smokingOptions} title="עישון בדירה" handleChane={handleChane}/>
            <CategoryItem options={petsOptions} title="חיות מחמד" handleChane={handleChane}/>
            <CategoryItem options={cleaningOptions} title=" סדר וניקיון" handleChane={handleChane}/>
            <div className="category-actions">
                <button className="btn btn-primary btn-large  my-2" onClick={submit}>שלח</button>                                                       
            </div>
        </div>
    )
}

export default CategoryPage
