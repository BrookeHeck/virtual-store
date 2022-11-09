import { connect } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Container, Typography, Button } from '@mui/material';

const SimpleCart = (props) => {

  const removeFromCart = (product) => {
    props.dispatch({ type: 'remove_product', payload: { product } });
  }

  return (
    <>
      <Container id='current-categories'>
        <Typography variant="h2">Your Cart</Typography>
        <Typography variant="h5">Total Items: {props.cart.numberOfItems}</Typography>
      </Container>
      <Container id='productsContainer'>
        {
          props.cart.productList.map(product => (
            <Card sx={{ maxWidth: 345 }} key={product.id}>
              <CardMedia
                component="img"
                height="140"
                image={product.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{product.display}</Typography>
                <Typography variant="body2" color="text.secondary">Quantity: {product.amountInCart}</Typography>
              </CardContent>

              <CardActions>
                <Button size="small" onClick={() => removeFromCart(product)}>Remove</Button>
              </CardActions>
            </Card>
          ))
        }
      </Container>
    </>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(SimpleCart);



