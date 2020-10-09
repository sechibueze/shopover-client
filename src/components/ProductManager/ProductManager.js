import React, { Fragment, useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import AuthContainer from '../AuthContainer';
import Modal from '../Modal';
import { getProductItems, deleteProductById, toggleProductVisibility, resetProduct } from '../../_actions/ProductActions';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';


const ProductManager = ({currentUser, getProductItems, toggleProductVisibility, productVisibility, resetProduct, deleteProductById, productItems,  newProduct, productUpdated, productDeleted }) => {
  const [shouldAddProduct, handleAddProductModal] = useState(false);
  const [shouldEditProduct, handleEditProductModal] = useState({
    productItemToEdit: '',
    canEdit: false
  });

  useEffect(() => {
    const filter = currentUser.roles.includes('admin') ? '' : { owner: currentUser._id}
    getProductItems(filter);
  } , [newProduct, productUpdated, productDeleted, productVisibility]);

  const isAdmin = () => {
    return currentUser.roles.includes('admin');
  };

  const handleAddProductRequest = (status) => {
    handleAddProductModal(status);
    resetProduct();
  };
  const handleEditProductRequest = (productRecord, shouldUserEdit = true) => {
    handleEditProductModal(prev => ({
      ...prev,
      productItemToEdit: productRecord,
      canEdit: shouldUserEdit
    }));
  };
  const handleEditProduct = status => {
    handleEditProductModal(prev => ({
      ...prev,
      canEdit: status
    }));
    resetProduct();
  }
  const handleDeleteProduct = id => {
    if (window.confirm("Are you sure ? ")) {
      deleteProductById(id);
    }
  };

  const { productItemToEdit, canEdit } = shouldEditProduct;
  return ( 
    <AuthContainer>
      <div className="auth-action">
        <span className="" onClick={() => handleAddProductRequest(true)}> Add Product</span>
      </div>
      {
        shouldAddProduct && 
        <Modal isOpen={shouldAddProduct} dismiss={() => handleAddProductRequest(false)}>
          <AddProductForm dismiss={() => handleAddProductRequest(false)} />
        </Modal>
      }

      {
        canEdit && 
        <Modal isOpen={canEdit} dismiss={() => handleEditProduct(false)}>
          <EditProductForm productRecord={productItemToEdit} dismiss={() => handleEditProduct(false)} />
        </Modal>
      }

      <table>
        <thead>
          <tr>
            <td> S/N </td>
            <td> Title </td>
            <td> Price </td>
           
            <td> Edit </td>
           
            <td> Visibility </td> 
            {
              isAdmin()  && <td> Delete </td>
            }
            
            
          </tr>
        </thead>
        <tbody>


          {
            productItems.length > 0 && productItems.map((product, idx) => {
              let {_id, title, price, owner, visibility } = product;
              const shouldUserEdit = owner._id === currentUser._id ? true : false ;
              
              return (
                <tr>
                  <td> { ++idx} </td>
                  <td> { title && title} </td>
                  <td> { price && price} </td>
                                      
                  <td> <span className="fa fa-edit" onClick={() => handleEditProductRequest(product, shouldUserEdit)} /> </td>
                  
                 
                  {
                    isAdmin() ? (<td> <span onClick={() => toggleProductVisibility(_id)}> {visibility ? 'HIDE': 'SHOW'} </span></td>) 
                    : (<td> <span> {visibility ? 'HIDE': 'SHOW'} </span></td>)
                    
                  
                  }
                  {
                    isAdmin()   && 
                    <td> <span className="fa fa-close" onClick={() => handleDeleteProduct(_id)} /> </td>
                    
                  }
                </tr>
              )
            
            })
          }
        </tbody>

    </table>



    </AuthContainer>
   );
}
 ProductManager.propTypes = {
   getProductItems: PropTypes.func.isRequired,
   deleteProductById: PropTypes.func.isRequired,
   resetProduct: PropTypes.func.isRequired,
   toggleProductVisibility: PropTypes.func.isRequired,
   
 };
const mapStateToProps = state => ({
  productItems: state.products.productItems,
  newProduct: state.products.newProduct,
  productUpdated: state.products.productUpdated,
  productDeleted: state.products.productDeleted,
  productVisibility: state.products.productVisibility,
  currentUser: state.auth.currentUser,
});
export default connect(mapStateToProps, { getProductItems, toggleProductVisibility, resetProduct, deleteProductById })(ProductManager);