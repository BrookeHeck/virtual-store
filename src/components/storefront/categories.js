import { Typography, Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab'
import store from './../../store';

function Categories() {

  const categoryState = store.getState().categories;

  const handleChange = (e, newValue) => {
    store.dispatch({type: newValue});
    console.log(store.getState());
  }
  return (
    <>
      <Typography variant="h6">Browse Our Categories</Typography>
      <TabContext value={categoryState.active}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label='All' value='all' key='all'/>
            {
              categoryState.categories.map(category => {
                return <Tab label={category.display} value={category.normalized} key={category.normalized}/>
              })
            }
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </>
  )
}

export default Categories;