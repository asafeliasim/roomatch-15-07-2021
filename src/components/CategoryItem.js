import React from 'react'

const CategoryItem = ({title,options,handleChane}) => {
    return (
        <div className="category-item">
        <div>
            <h4>{title}</h4>
            <p>בחר את התשובה שהכי מתאימה </p>
        </div>  
        <div className="category-answers">
        
            <select name="hospitality" id="cleaning" class="select" onChange={handleChane}>
                {options.length > 0 && options.map((option)=> 
                    <option key={option.id} value={option.id}>{option.title}</option>
                )}
            </select>
        </div>  
    </div>    
    )
}

export default CategoryItem
