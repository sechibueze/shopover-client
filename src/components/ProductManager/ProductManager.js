import React, { useState, useEffect } from 'react';
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
        <span className="" onClick={() => handleAddProductRequest(true)}> <span className="icon fa fa-plus" /> Add Product</span>
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

      <table className="table">
        <thead>
          <tr>
            <th> S/N </th>
            <th> Title </th>
            <th> Product Image </th>
            <th> Price </th>      
            <th> Edit </th>
            <th> Visibility </th> 
            {/* Only Admins can delete a product */}
            {
              isAdmin()  && <th> Delete </th>
            }         
          </tr>
        </thead>
        <tbody>


          {
            productItems.length > 0 && productItems.map((product, idx) => {
              let {_id, title, productImage, price, owner, visibility } = product;
              const shouldUserEdit = owner._id === currentUser._id ? true : false ;
              
              return (
                <tr>
                  <td> { ++idx} </td>
                  <td> { title && title} </td>
                  <td> <img style={{ width: '32px', height: '32px'}} src={productImage ? productImage : 'https://picsum.photos/32'} alt="product item" /> </td>
                  <td> { price && price} </td>
                                      
                  <td > <span className={`fa fa-${ shouldUserEdit ? 'edit': 'exclamation-circle'}`} onClick={() => handleEditProductRequest(product, shouldUserEdit)} /> </td>
                  
                 
                  {
                    isAdmin() ? (<td> <span className={`icon fa fa-eye${ visibility ? '-slash': '' }`}  onClick={() => toggleProductVisibility(_id)}/> </td>) 
                    : (<td> <span title="Product needs verification before going live. Contact Admin to make it quicker" className={`icon fa fa-exclamation-circle`} /> </td>)
                    
                  }
                  {
                    isAdmin()   && 
                    <td> <span className="icon fa fa-times" onClick={() => handleDeleteProduct(_id)} />  </td>
                    
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