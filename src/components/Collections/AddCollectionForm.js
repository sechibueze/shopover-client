import React, { useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';

import { CREATE_COLLECTION } from '../../_actions/types';
import { createCollection } from '../../_actions/CollectionActions';
import Alert from '../Alert/Alert';
const AddCollectionForm = ({ dismiss, createCollection, newCollection }) => {

  const [data, setData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    if(newCollection !== null) dismiss();
    }, [newCollection]);
    
  
  
  const handleChange = ({ target}) => {
    const { name, value} = target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    createCollection(data);
  };
  
  
  const {title, description} = data;

  return ( 
    <form className="form" onSubmit={handleSubmit}>

      <Alert origin={CREATE_COLLECTION} />

      <div className="form-group">
        <label htmlFor="title"> Collection title</label>
        <input type="text" value={title} onChange={handleChange} className="form-control" name="title" id="title" placeholder="Enter title" required />
      </div>

      <div className="form-group">
        <label htmlFor="description"> Collection Description</label>
        <textarea type="text"  value={description}  onChange={handleChange}  className="form-control" name="description" id="description" placeholder="ENter a short summary" required />
      </div>
      
      <button type="submit" className="btn btn-primary icon fa fa-plus"> Create Collection</button>
    </form>
   );
}

AddCollectionForm.propTypes = {
   createCollection: PropTypes.func.isRequired,
   
 };
const mapStateToProps = state => ({
  newCollection: state.collections.newCollection,
});
export default connect(mapStateToProps, { createCollection })(AddCollectionForm);
