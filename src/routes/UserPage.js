import React from 'react';
import { connect } from 'dva';

const User = (props) => {
  console.log(props.loading.global);
  const { error, user } = props.user;
  const { dispatch } = props;
  let isFetching = props.loading.effects["user/fetch"]

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
      <button onClick={ () => { dispatch({ type: 'user/fetch/start' }) } }>get user start</button>
    </div>
  )
}

User.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(User);
