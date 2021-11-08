import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log deleted' });
  };

  return (
    <li className="collection-item" style={{ padding: ' 30px' }}>
      <div>
        <a
          style={{ fontSize: '40px' }}
          href="$edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'teal-text'
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <div style={{ paddingTop: '20px' }}>
          <span className="grey-text">
            <span className="black-text">Id # {log.id}</span> Last updated by{' '}
            <span className="black-text">{log.tech}</span> on{' '}
            <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
          </span>

          <a href="#!" onClick={onDelete} className="secondary-content">
            <i
              style={{ fontSize: '30px' }}
              className="material-icons black-text"
            >
              cancel
            </i>
          </a>
        </div>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
