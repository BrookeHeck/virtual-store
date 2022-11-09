import { useState } from 'react';
import { connect } from 'react-redux';
import store from './../../store';
import { Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { Typography, Container } from '@mui/material';
import Details from './../products/details';
import './../../styles/products.css';

{/* <Snackbar open={true} autoHideDuration={5000}>
          <Alert severity="error" sx={{ width: '100%' }}>Out of Stock</Alert>
        </Snackbar> */}


function Products(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(props.products[0]);

  const displayList = props.categories.active === 'all' ? props.products :
    props.products.filter(product => product.category === props.categories.active);

  const showDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }

  const addToCart = (product) => {
    if (product.inventoryCount >= 1) {
      store.dispatch({ type: 'add_product', payload: { product } });
      const updatedProduct = {...product, inventoryCount: product.inventoryCount - 1 }
      store.dispatch({type: 'update_product', payload: updatedProduct});
    } else {
      alert('out of stock');
    }
  }

  return (
    <Container id='productsContainer'>
      {
        displayList.map(product => (
          <Card sx={{ maxWidth: 345 }} key={product.id}>
            <CardMedia
              component="img"
              height="140"
              image={product.img}
              alt="green iguana"
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

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products.products,
});

export default connect(mapStateToProps)(Products);