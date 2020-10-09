import {
  CREATE_COLLECTION,
  GET_COLLECTIONS,
  EDIT_COLLECTION,
  RESET_COLLECTION,
  DELETE_COLLECTION
} from '../_actions/types';

const initialState = {
  newCollection: null,
  collectionItems: [],
  collectionEdited: null,
  collectionDeleted: null

};

export default (state = initialState, action) => {
  const { type, payload} = action;

  switch (type) {
    case CREATE_COLLECTION:
      return {
        ...state,
        newCollection: payload
      };
    case GET_COLLECTIONS:
      return {
        ...state,
        collectionItems: payload
      };
    case EDIT_COLLECTION:
      return {
        ...state,
        collectionEdited: payload
      };
    case RESET_COLLECTION:
      return {
        ...state,
        newCollection: null,
        collectionEdited: null,
        collectionDeleted: null,
      };
    case DELETE_COLLECTION:
      return {
        ...state,
        collectionDeleted: payload
      };
  
    default:
      return state;
  }
};