import { useSelector } from 'react-redux';
import { Typography, Container } from "@mui/material";
import './../../styles/current-categories.css';

function CurrentCategory() {
  const categories = useSelector(state => state.categories).categories.results;
  const active = useSelector(state => state.categories).active;

  const activeCategory = categories.find(category => category.name === active);

  return (
    <Container id='current-categories'>
      <Typography variant="h2">{activeCategory.name}</Typography>
      <Typography variant="h5">{activeCategory.description}</Typography>
    </Container>
  )
}

export default CurrentCategory;
