import React, { useState } from 'react';
import classes from './Account.module.css';
import { connect } from 'react-redux';
import * as action from '../../../../redux/actions';
const Account = ({ username, onUpdateName }) => {
  const [DisableButtonState, setDisableButtonState] = useState(true);
  const [updatedName, setUpdatedName] = useState(username.trim());
  const [resultMessage, setResultMessage] = useState(null);

  let resultMsg = <div>{resultMessage}</div>;
  const EditBtnHandler = (e) => {
    e.preventDefault();
    setDisableButtonState(false);
  };
  const CancelBtnHandler = (e) => {
    e.preventDefault();
    setDisableButtonState(true);
    setUpdatedName(updatedName.trim());
  };
  const UpdateBtnHandler = (e) => {
    e.preventDefault();
    if (updatedName.trim() === '') {
      setResultMessage('Name cannot be blank...');
    } else {
      onUpdateName(updatedName.trim());
      setDisableButtonState(true);
      setResultMessage('Changing name success');
      setUpdatedName(updatedName.trim());
      setTimeout(() => {
        setResultMessage(null);
      }, 1300);
    }
  };
  let style = {
    color: 'black',
  };
  if (!DisableButtonState) {
    style = {
      color: 'green',
      border: '2px solid green',
    };
  }
  let btn = <button onClick={EditBtnHandler}>Edit Name</button>;
  if (!DisableButtonState) {
    btn = (
      <>
        <button className={classes.CancelBtn} onClick={CancelBtnHandler}>
          Cancel
        </button>
        <button onClick={UpdateBtnHandler}>Update Name</button>
      </>
    );
  }

  return (
    <div className={classes.Account}>
      <h2>Account settings</h2>

      <form>
        <label>
          Account Name:
          <div style={{ color: 'red' }}> {resultMsg}</div>
          <input
            style={style}
            type="text"
            value={updatedName}
            disabled={DisableButtonState}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          {btn}
        </label>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateName: (updatedName) =>
      dispatch(action.updateNameStart(updatedName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
