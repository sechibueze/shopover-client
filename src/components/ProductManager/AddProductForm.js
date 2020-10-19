import React, { useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { baseURL, ADD_PRODUCT } from '../../_actions/types';
import { addProduct } from '../../_actions/ProductActions';
import Alert from '../Alert/Alert';
const AddProductForm = ({ dismiss, addProduct, newProduct }) => {

  const [productCategory, setProductCategory] = useState([]);
  const [data, setData] = useState({
    title: '',
    description: '',
    price: '',
    productImage: "",
    category: '',
    tags: ''
  });

  useEffect(() => {
    if(newProduct !== null) dismiss();
    }, [newProduct]);
    
  useEffect(() => {
    const url = `${ baseURL }/api/collections`;
    axios.get(url).then(({ data }) => {
      setProductCategory(data.data)
    }).catch(e => console.log('Error loading categories...', e))
  }, []);
  
  
  const handleChange = ({ target}) => {
    const { name, value} = target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    addProduct(data);
  };
  
  
  const {title, price,  description, tags, productImage} = data;

  return ( 
    <form className="form" onSubmit={handleSubmit}>

      <Alert origin={ADD_PRODUCT} />

      <div className="form-group">
        <label htmlFor="title"> Product title</label>
        <input type="text" value={title} onChange={handleChange} className="form-control" name="title" id="title" placeholder="Enter title" required />
      </div>
      <div className="form-group">
        <label htmlFor="description"> Product Description</label>
        <textarea type="text"  value={description}  onChange={handleChange}  className="form-control" name="description" id="description" placeholder="ENter a short summary" required />
      </div>
      <div className="form-group">
        <label htmlFor="image"> Product image</label>
        <input type="url"  value={productImage}   onChange={handleChange}  className="form-control" name="productImage" id="image" placeholder="Enter image URL" required />
      </div>
      <div className="form-group">
        <label htmlFor="price"> Product price</label>
        <input type="text" value={price}   onChange={handleChange}  className="form-control" pattern="[0-9]+" name="price" id="price" placeholder="30" required />
      </div>

      <div className="form-group">
        <label htmlFor="category"> Product category</label>
        <select className="form-control"  onChange={handleChange}  name="category" id="category"  required>
          <option value="" selected> ---select ---</option>
          {
            productCategory.map(cat => {
              const {_id, title } = cat;
              return (
                <option value={ _id }> { title && title }  </option>
              )
            })
          }
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="tags"> Product tags</label>
        <input type="text"  value={tags}  onChange={handleChange}  className="form-control" name="tags" id="tags" placeholder="bucket, chin-chin, mango" required />
        <small> Enter comma separetd list </small>
      </div>

      <button type="submit" className="btn btn-reverse fa fa-plus"> <span className="icon "/> Add Product</button>
    </form>
   );
}

AddProductForm.propTypes = {
   addProduct: PropTypes.func.isRequired,
   
 };
const mapStateToProps = state => ({
  newProduct: state.products.newProduct,
});
export default connect(mapStateToProps, { addProduct })(AddProductForm);
