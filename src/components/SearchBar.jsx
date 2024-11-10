import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {

    const [term , setTerm] = useState('');

    const  onFormSubmit = (e)=>{
        e.preventDefault();
        onSubmit(term);
        setTerm('');
    }



  return (
    <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
            <label>image Search</label>
            <input type="text" name="search" placeholder="" value={term} onChange={(e)=>{setTerm(e.target.value)}} />
        </div>
        <button className="ui button" type="submit">Submit</button>
    </form>

  )
}

export default SearchBar
