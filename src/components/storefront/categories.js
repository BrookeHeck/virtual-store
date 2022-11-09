import { Typography, Box, Tab, Container } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux';
import './../../styles/categories.css'

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  const handleChange = (e, newValue) => {
    dispatch({type: newValue});
  }

  return (
    <Container>
      <Typography variant="h4">Browse Our Categories</Typography>
      <TabContext value={categories.active}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {
              categories.categories.map(category => {
                return <Tab label={category.display} value={category.normalized} key={category.normalized}/>
              })
            }
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Container>
  )
}

export default Categories;