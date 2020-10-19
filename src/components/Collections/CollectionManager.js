import React, { useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import AuthContainer from '../AuthContainer';
import Modal from '../Modal';
import { createCollection, getCollections, resetCollection, deleteCollectionById } from '../../_actions/CollectionActions';
import AddCollectionForm from './AddCollectionForm';
import EditCollectionForm from './EditCollectionForm';

const CollectionManager = ({ getCollections, resetCollection,  deleteCollectionById, collectionItems, newCollection, collectionEdited, collectionDeleted}) => {

  const [canAddCollection, setCanAddCollection] = useState(false);
  // const [ canEditCollection , setCanEditCollection] = useState(false);
  const [editCollectionData, setEditCollectionData] = useState({
    collectionId: '',
    canEditCollection: false,
    collectionInfo: {}
  });

  useEffect(() => {
    getCollections();
  } , [newCollection, collectionEdited, collectionDeleted]);

  const handleCanAddCollectionRequest = (status) => {
    setCanAddCollection(status);
    resetCollection();
  };

  const startEditCollectionRequest = ( collectionId = '', collectionInfo) => {
    setEditCollectionData(prev => ({
      ...prev,
      collectionId: collectionId,
      canEditCollection: true,
      collectionInfo: collectionInfo
    }));
  };
  
  const dismissEditCollection = () => {
      setEditCollectionData(prev => ({
        ...prev,
        canEditCollection: false
      }));
      resetCollection();
  
  }

  const handleDeleteCollection = id => {
    if (window.confirm("Are you sure ? ")) {
      deleteCollectionById(id);
    }
  };

  const { collectionId, canEditCollection, collectionInfo } = editCollectionData;
  return ( 
    <AuthContainer>
      <div className="auth-action">
        <span className="icon fa fa-plus" onClick={() => setCanAddCollection(true)}> Add Collection</span>
      </div>
      {
        canAddCollection && 
        <Modal isOpen={canAddCollection} dismiss={() => handleCanAddCollectionRequest(false)}>
          <AddCollectionForm dismiss={() => handleCanAddCollectionRequest(false)} />
        </Modal>
      }

      {
        canEditCollection && 
        <Modal isOpen={canEditCollection} dismiss={() => dismissEditCollection()}>
          <EditCollectionForm collectionId={collectionId} prevData={collectionInfo} dismiss={() => dismissEditCollection()} />
        </Modal>
      }

      <table className="table">
        <thead>
          <tr>
            <th> S/N </th>
            <th> Title </th>
            <th> Description </th>
            <th> Edit </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>


          {
            collectionItems.length > 0 && collectionItems.map((collection, idx) => {
              let {_id, title, description} = collection;
              
              return (
                <tr>
                  <td> { ++idx} </td>
                  <td> { title && title} </td>
                  <td> { description && description.slice(0, 20)} </td>
                  {/* <td> { price && price} </td> */}
                  <td> <span className="fa fa-edit" onClick={() => startEditCollectionRequest(_id, collection)} /> </td>
                  <td> <span className="fa fa-times" onClick={() => handleDeleteCollection(_id)} /> </td>
                </tr>
              )
            
            })
          }
        </tbody>

    </table>



    </AuthContainer>
   );
}
 CollectionManager.propTypes = {
   getCollections: PropTypes.func.isRequired,
   deleteCollectionById: PropTypes.func.isRequired,
   createCollection: PropTypes.func.isRequired,
   resetCollection: PropTypes.func.isRequired,
   
 };
const mapStateToProps = state => ({
  newCollection: state.collections.newCollection,
  collectionEdited: state.collections.collectionEdited,
  collectionDeleted: state.collections.collectionDeleted,
  collectionItems: state.collections.collectionItems,
});
export default connect(mapStateToProps, { getCollections, createCollection, resetCollection, deleteCollectionById })(CollectionManager);