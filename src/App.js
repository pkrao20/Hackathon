import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import InstantPlay from './pages/InstantPlay';
import BottomBar from './pages/BottomBar';
import LatestReleases from './pages/LatestReleases';
import ApprovedApplications from './pages/ApprovedApplications';
import ReviewedApplications from './pages/ReviewedApplications'
import Profile from './pages/Profile';
function App() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Routes>
          <Route
            path='/auth/signin'
            element={ <Signin /> }
          />
          <Route
            path='/instant-play'
            element={ <InstantPlay /> }
          />
          <Route
            path='/latest-releases'
            element={ <LatestReleases/> }
          />
          <Route
            path='/approved-applications'
            element={ <ApprovedApplications /> }
          />
          <Route
            path='/reviewed-applications'
            element={ <ReviewedApplications /> }
          />
          <Route
            path='/profile'
            element={ <Profile /> }
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>  
      </div>
      
      <BottomBar />
    </div>
  );
}

export default App;
