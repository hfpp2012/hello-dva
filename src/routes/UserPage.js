import React from 'react';
import { connect } from 'dva';

const User = (props) => {
  const { isFetching, error, user } = props.user;
  const { dispatch } = props;

  let data;

  if (error) {
    data = error;
  } else if (isFetching) {
    data = "Loading..."
  } else {
    data = user && user.data[0].name
  }

  return (
    <div>
      <h1>{ data }</h1>
      <button onClick={ () => { dispatch({ type: 'user/fetch' }) } }>get user</button>
    </div>
  )
}

User.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(User);
