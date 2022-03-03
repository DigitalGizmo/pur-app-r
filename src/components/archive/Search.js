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
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(term)
    }
  }

  return (
    <div>
      <div>
        {/* <label>Search</label> */}
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={handleKeyDown}
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