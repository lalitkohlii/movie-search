import Home from "./pages/Home/Home";
import { Box } from "grommet";
import Movie from './pages/Movie/Movie';
import Tv from './pages/Tv/Tv';
import Person from './pages/Person/Person'
import { Route, Switch } from "react-router";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import Credit from './pages/Credit/Credit';
function App() {
  // const paramss = {
  //   language: 'Lan Id', //
  //   sort_by: `popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc
  //   default: popularity.desc`, //
  //   page: 1, //
  //   year: 2020, // mpt om 
  //   with_people: 'person Id', // not
  //   with_companies: 'company id', //
  //   with_genres: 'geners id' //

  // }
  return (
  <Box direction="column" gap="small">
    <SiteHeader />
    <Box full gap="small" pad="small">
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/movie/:id?" component={Movie}></Route>
      <Route path="/tv/:id?" component={Tv}></Route>
      <Route path="/person/:id?" component={Person}></Route>
      <Route path="/credit/:type?/:id?" component={Credit}></Route>      
    </Switch>
    </Box>
    
  </Box>

  );
}


export default App;
