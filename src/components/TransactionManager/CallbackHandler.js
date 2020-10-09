import React, { useState, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../_actions/types';

const CallbackHandler = ({ location }) => {
  const [hasCompleted, setHasCompleted] = useState(false)
  const getPaystackTransactionReference = () => {
    const query = new URLSearchParams(location.search);
    return query.get('reference');
  }

  
    useEffect(() => {
      const reference = getPaystackTransactionReference();
      const url = `${ baseURL}/api/transactions/verify`;
      const body = { reference };
      axios
        .post(url, body)
        .then(({ data }) => {
          console.log('CallbackHandler data', data)
          setHasCompleted(true)
        })
        .catch(e => {})
    }, [])

  return (
    <Fragment>
      {
        hasCompleted ? (<Redirect to={'/'}/>) : <h1> Loading...</h1>
      }
    </Fragment>
  );
}
 
export default CallbackHandler;