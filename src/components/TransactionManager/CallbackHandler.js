import React, { useState, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../_actions/types';

const CallbackHandler = ({ location }) => {
  const [hasCompleted, setHasCompleted] = useState(false)
  const { search } = location;

  
    useEffect(() => {
      const query = new URLSearchParams(search);
      const reference = query.get('reference');

      const url = `${ baseURL}/api/transactions/verify`;
      const body = { reference };
      axios
        .post(url, body)
        .then(({ data }) => {
          setHasCompleted(true)
        })
        .catch(e => {})
    }, [search])

  return (
    <Fragment>
      {
        hasCompleted ? (<Redirect to={'/'}/>) : <h1> Loading...</h1>
      }
    </Fragment>
  );
}
 
export default CallbackHandler;