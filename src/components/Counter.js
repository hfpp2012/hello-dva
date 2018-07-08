import React from 'react';
import { withRouter, Link, routerRedux } from 'dva/router'
import PropTypes from 'prop-types';

const Counter = ({ counter, dispatch, history }, context) => {
  return (
    <div>
      <h1>{ counter.count }</h1>
      <button onClick={ () => dispatch(routerRedux.push('/')) }>routerRedux back back</button>
      <Link to='/'>home page</Link>
      <button onClick={ () => context.router.history.push('/') }>context go back</button>
      <button onClick={ () => history.push('/') }>go back home</button>
      <button onClick={ () => { dispatch({ type: 'counter/add' }) } }>+</button>
      <button onClick={ () => { dispatch({ type: 'counter/asyncAdd' }) } }>async +</button>
      <p></p>
    </div>
  )
}

Counter.contextTypes = {
  router: PropTypes.object
}

Counter.propTypes = {
}

export default withRouter(Counter);
