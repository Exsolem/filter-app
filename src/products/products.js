import React from 'react';
import Product from './product/product';



const Products = ({ match,...props }) => {
    let products;
    const category = match.params.category.split('_').join(' ');
    const filteredProducts = props.products.filter(item => item.bsr_category.search(category) !== -1);
    if(filteredProducts.length !== 0){
        products = filteredProducts
            .map((product,index) => <Product key={index} index={index} product={product} />);
    }else if(category==='Home Page'){
        products = props.products.map((product,index) => <Product key={index} index={index} product={product} />);
    }
    else{
        const searchedProducts = props.products.filter(item => item.name.toLowerCase().search(category.trim().toLowerCase()) !== -1);
        products = searchedProducts.map((product,index) => <Product key={index} index={index} product={product} />);
    }

    return <ul className='col-lg-9'>
        {products}
</ul>
}
export default Products;