import { Typography, Box, Tab, Container } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab'
import store from './../../store';
import { connect } from 'react-redux';
import './../../styles/categories.css'

function Categories(props) {

  const handleChange = (e, newValue) => {
    store.dispatch({type: newValue});
  }

  return (
    <Container>
      <Typography variant="h4">Browse Our Categories</Typography>
      <TabContext value={props.categories.active}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {
              props.categories.categories.map(category => {
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

const mapStateToProps = (state) => ({
  categories: state.categories
});

export default connect(mapStateToProps)(Categories);