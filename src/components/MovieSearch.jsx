import React, { useState } from "react";

const MovieSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    // <div className="row col-md-12 mt-5 justify-content-center">
    //   <input
    //     type="text"
    //     placeholder="Search movies..."
    //     className="Movie-search"
    //     value={searchQuery}
    //     onChange={handleSearch}
    //   />
    // </div>
    <div className="row justify-content-center center">
      <div className="col-md-5 mt-5">
        <div className="input-group d-flex justify-content-center">
          <input
            className="form-control border-end-0 border rounded-pill"
            type="search"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearch}
            id="example-search-input"
          />
          <span className="input-group-append">
            <button
              className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
              type="button"
            >
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
