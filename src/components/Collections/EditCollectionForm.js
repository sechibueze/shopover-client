import React, { useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';

import { EDIT_COLLECTION } from '../../_actions/types';
import { updateCollectionById } from '../../_actions/CollectionActions';
import Alert from '../Alert/Alert';

const EditCollectionForm = ({ dismiss, collectionId, prevData, updateCollectionById, collectionEdited }) => {
  
  const [data, setData] = useState({
    title: prevData.title ? prevData.title : '',
    description: prevData.description ? prevData.description : '',
  });

  useEffect(() => {
    if(collectionEdited !== null) dismiss();
    }, [collectionEdited]);
    
  const handleChange = ({ target}) => {
    const { name, value} = target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    updateCollectionById(collectionId, data);
  };
  
  const { title, description } = data;

  return ( 
    <form className="form" onSubmit={handleSubmit}>

      <Alert origin={EDIT_COLLECTION} />

      <div className="form-group">
        <label htmlFor="title"> Collection title</label>
        <input type="text" value={title} onChange={handleChange} className="form-control" name="title" id="title"   />
      </div>

      <div className="form-group">
        <label htmlFor="description"> Collection Description</label>
        <textarea type="text"  value={description}  onChange={handleChange}  className="form-control" name="description" id="description"  />
      </div>
      
      <button type="submit" className="btn btn-primary"> Update Collection</button>
      
    </form>
   );
}

EditCollectionForm.propTypes = {
   updateCollectionById: PropTypes.func.isRequired,
 };

const mapStateToProps = state => ({
  collectionEdited: state.collections.collectionEdited,
});

export default connect(mapStateToProps, { updateCollectionById })(EditCollectionForm);
