import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = (e) => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className="teal">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              style={{ fontSize: '40px' }}
              type="search"
              id="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onChange}
            />
            <label htmlFor="search" className="label-icon">
              {' '}
              <i style={{ fontSize: '35px' }} className="material-icons">
                search
              </i>{' '}
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
