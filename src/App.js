import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import ARPage from './pages/admin/ar';
import UIUXPage from './pages/admin/ux';
import DashboardWrapper from './dashboard';
import VideosPage from './pages/admin/videos';
import UpdatesPage from './pages/admin/updates';
import PhotographyPage from './pages/admin/photography';
import IllustrationPage from './pages/admin/illustration';
import DocumentationPage from './pages/admin/documentation';
import GraphicDesignPage from './pages/admin/graphic-design';

function App() {
  return (
    <Router>
      <DashboardWrapper>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/admin/ar" exact={true}>
            <ARPage />
          </Route>
          <Route path="/admin/documentation" exact={true}>
            <DocumentationPage />
          </Route>
          <Route path="/admin/graphic-design" exact={true}>
            <GraphicDesignPage />
          </Route>
          <Route path="/admin/illustration" exact={true}>
            <IllustrationPage />
          </Route>
          <Route path="/admin/photography" exact={true}>
            <PhotographyPage />
          </Route>
          <Route path="/admin/updates" exact={true}>
            <UpdatesPage />
          </Route>
          <Route path="/admin/ux" exact={true}>
            <UIUXPage />
          </Route>
          <Route path="/admin/videos" exact={true}>
            <VideosPage />
          </Route>
        </Switch>
      </DashboardWrapper>
    </Router>
  );
}

export default App;
