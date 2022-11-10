import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { Typography, Container } from '@mui/material';
import Details from './../products/details';
import './../../styles/products.css';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products).products;
  const categories = useSelector(state => state.categories);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const displayList = categories.active === 'all' ? products :
    products.filter(product => product.category === categories.active);

  const showDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }

  const addToCart = (product) => {
    if (product.inStock >= 1) {
      dispatch({ type: 'add_product', payload: { product } });
      const updatedProduct = {...product, inventoryCount: product.inStock - 1 }
      dispatch({type: 'update_product', payload: updatedProduct});
    } else {
      alert('out of stock');
    }
  }

  return (
    <Container id='productsContainer'>
      {
        displayList.map(product => (
          <Card sx={{ maxWidth: 345 }} key={product._id}>
            <CardMedia
              component="img"
              height="140"
              image={product.img}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{product.display}</Typography>

              <Typography variant="body2" color="text.secondary">{product.description}</Typography>
            </CardContent>

            <CardActions>
              <Button size="small" onClick={() => addToCart(product)}>Add To Cart</Button>
              <Button size="small" onClick={() => showDetails(product)}>View Details</Button>
            </CardActions>
          </Card>
        ))
      }
      <Details showModal={showModal} setShowModal={setShowModal} selectedProduct={selectedProduct} />
    </Container>
  );
}

export default Products;