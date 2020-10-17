import React, { useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { baseURL, UPDATE_PRODUCT } from '../../_actions/types';
import { updateProductById } from '../../_actions/ProductActions';
import Alert from '../Alert/Alert';

const EditProductForm = ({ productRecord, dismiss, updateProductById, productUpdated }) => {


  const [productCategory, setProductCategory] = useState([]);
  const [data, setData] = useState({
    title: productRecord.title ? productRecord.title : '',
    description: productRecord.description ? productRecord.description : '',
    price: productRecord.price ? productRecord.price : '',
    productImage: productRecord.productImage ? productRecord.productImage : '',
    category: '',
    tags: productRecord.tags ? productRecord.tags.join(',') : '',
  });

  useEffect(() => {
    if(productUpdated !== null) dismiss();
    }, [productUpdated]);
    
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
    updateProductById(productRecord._id, data);
  };
  
  
  const {title, price, category, description, tags, productImage} = data;

  return ( 
    <form className="form" onSubmit={handleSubmit}>

      <Alert origin={UPDATE_PRODUCT} />

      <div className="form-group">
        <label htmlFor="title"> Product title</label>
        <input type="text" value={title} onChange={handleChange} className="form-control" name="title" id="title" placeholder="Enter title"  />
      </div>
      <div className="form-group">
        <label htmlFor="description"> Product Description</label>
        <textarea type="text"  value={description}  onChange={handleChange}  className="form-control" name="description" id="description" placeholder="ENter a short summary"  />
      </div>
      <div className="form-group">
        <label htmlFor="image"> Product image</label>
        <input type="url"  value={productImage}   onChange={handleChange}  className="form-control" name="productImage" id="image" placeholder="Enter image URL"  />
      </div>
      <div className="form-group">
        <label htmlFor="price"> Product price</label>
        <input type="text" value={price}   onChange={handleChange}  className="form-control" pattern="[0-9]+" name="price" id="price" placeholder="30"  />
      </div>

      <div className="form-group">
        <label htmlFor="category"> Product category</label>
        <select className="form-control"  onChange={handleChange}  name="category" id="category"  >
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
        <input type="text"  value={tags}  onChange={handleChange}  className="form-control" name="tags" id="tags" placeholder="bucket, chin-chin, mango"  />
        <small> Enter comma separetd list </small>
      </div>

      <button type="submit" className="btn btn-primary fa fa-save"> &nbsp;  Update Product</button>
    </form>
   );
}

EditProductForm.propTypes = {
   updateProductById: PropTypes.func.isRequired,
 };
const mapStateToProps = state => ({
  productUpdated: state.products.productUpdated,
});
export default connect(mapStateToProps, { updateProductById })(EditProductForm);
