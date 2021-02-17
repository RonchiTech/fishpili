import React, { useState } from 'react';
import classes from './Account.module.css';
import { connect } from 'react-redux';
import * as action from '../../../../redux/actions'
const Account = ({ username, onUpdateName }) => {
  const [DisableButtonState, setDisableButtonState] = useState(true);
  const [updatedName, setUpdatedName] = useState(username);
  const EditBtnHandler = (e) => {
    e.preventDefault();
    setDisableButtonState(false);
  };
  const CancelBtnHandler = (e) => {
    e.preventDefault();
    setDisableButtonState(true);
  };
  const UpdateBtnHandler = (e) => {
    e.preventDefault();
    onUpdateName(updatedName);
    setDisableButtonState(true);
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
  let btn = <button onClick={EditBtnHandler}>Edit</button>;
  if (!DisableButtonState) {
    btn = (
      <>
        <button className={classes.CancelBtn} onClick={CancelBtnHandler}>
          Cancel
        </button>
        <button onClick={UpdateBtnHandler}>Update</button>
      </>
    );
  }
  return (
    <div className={classes.Account}>
      <h2>Account settings</h2>
      <form>
        <label>
          Account Name:
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
}
export default connect(mapStateToProps, mapDispatchToProps)(Account);
