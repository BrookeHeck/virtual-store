import { connect } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container} from '@mui/material'
import './../../styles/products.css';


function Products(props) {

  const displayList = props.categories.active === 'all' ? props.products :
  props.products.filter(product => product.category === props.categories.active);

  console.log(displayList);

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
            <Button size="small">Add To Cart</Button>
            <Button size="small">View Details</Button>
          </CardActions>
        </Card>
        ))
      }
    </Container>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products.products,
});

export default connect(mapStateToProps)(Products);