import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import SearchList from '../../components/SearchList/SearchList';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchList, setShowSearchList] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  };

  const onClickSubmit = () => {
    setShowSearchList(true); 
  };

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <div className="user-page">
        <div className="page-content">
          <section className="catalog">
            <div className="sign-in__fields">
              <input 
                className="sign-in__input"
                id="search-input"
                type="search" 
                placeholder="film name" 
                value={searchQuery}
                onChange={handleChange}
              /><br />
              <button className="sign-in__btn" type="button" onClick={onClickSubmit}>Search</button>
            </div>
          </section>
          {showSearchList && (<SearchList query={searchQuery}/>) }
        </div>
      </div>
    </>
  );
}

export default SearchPage;