import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PreLoader from '../layouts/PreLoader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

//destructured log brought in from mapStateToProps
//can pull of certain parts of the state in destructuring.
//must destructure actions brought in.
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'> System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No Logs to show</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

//bring in anything from app level state, bring it in as a prop
//log is the name of the prop. Access the initial State options from logReducer
//state.log refers to root reducer log: logReducer
const mapStateToProps = (state) => ({
  log: state.log,
});
//actions should be second parameter
export default connect(mapStateToProps, { getLogs })(Logs);
