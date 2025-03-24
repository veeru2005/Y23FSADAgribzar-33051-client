import React from 'react';

const products = [ 
  { pid: '1', pname: 'Product 1', price: '$10',  Quantity: '10 KG', Manf_Date: 'Nov 2024', Exp_Date: 'Nov 2026' }, 
  { pid: '2', pname: 'Product 2', price: '$20', Quantity: '20 KG', Manf_Date: 'Oct 2024', Exp_Date: 'Oct 2026' }, 
  { pid: '3', pname: 'Product 3', price: '$30', Quantity: '10 KG', Manf_Date: 'Aug 2024', Exp_Date: 'Aug 2026' }, 
  { pid: '4', pname: 'Product 4', price: '$40', Quantity: '30 KG', Manf_Date: 'Sep 2024', Exp_Date: 'Sep 2026' },
  { pid: '5', pname: 'Product 5', price: '$50', Quantity: '20 KG', Manf_Date: 'Dec 2024', Exp_Date: 'Dec 2026' }
]; 
 
const Products = () => { 
  const tableStyle = { 
    backgroundColor:'white',
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  return ( 
    <div> 
      <h3>Available Products Here</h3>
      <h1>Products List</h1> 
      <table style={tableStyle}> 
        <thead> 
          <tr style={headerStyle}> 
            <th style={thTdStyle}>Product ID</th> 
            <th style={thTdStyle}>Product Name</th> 
            <th style={thTdStyle}>Price</th> 
            <th style={thTdStyle}>Quanity</th> 
            <th style={thTdStyle}>Manf_Date</th> 
            <th style={thTdStyle}>Exp_Date</th>
          </tr> 
        </thead> 
        <tbody> 
          {products.map(product => ( 
            <tr key={product.pid}> 
              <td style={thTdStyle}>{product.pid}</td> 
              <td style={thTdStyle}>{product.pname}</td> 
              <td style={thTdStyle}>{product.price}</td> 
              <td style={thTdStyle}>{product.Quantity}</td> 
              <td style={thTdStyle}>{product.Manf_Date}</td> 
              <td style={thTdStyle}>{product.Exp_Date}</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    </div> 
  ); 
}; 
 
export default Products;
