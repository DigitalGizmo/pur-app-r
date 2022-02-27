import React, {useState} from 'react';

const Search = ({setSearchTerm}) => {
  const [term, setTerm] = useState('');

  const onTermSet = () => {
    setSearchTerm(term);
  }

  const onTermClear = () => {
    setTerm('');
    setSearchTerm('');
  }
  
  return (
    <div>
      <div>
        {/* <label>Search</label> */}
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <p>
          <button 
            onClick={ onTermSet }
            className="don-button"
          >Search</button>
        </p>
        <p>
          <button 
            onClick={ onTermClear }
            className="don-button"
          >Clear</button>
        </p>

      </div>

    </div>
  );
}

export default Search;