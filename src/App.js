import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import ARPage from './pages/admin/ar';
import UIUXPage from './pages/admin/ux';
import DashboardLayout from './dashboard/layout';
import VideosPage from './pages/admin/videos';
import UpdatesPage from './pages/admin/updates';
import PhotographyPage from './pages/admin/photography';
import IllustrationPage from './pages/admin/illustration';
import DocumentationPage from './pages/admin/documentation';
import GraphicDesignPage from './pages/admin/graphic-design';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/admin/ar">
            <ARPage />
          </Route>
          <Route exact path="/admin/documentation">
            <DocumentationPage />
          </Route>
          <Route exact path="/admin/graphic-design">
            <GraphicDesignPage />
          </Route>
          <Route exact path="/admin/illustration">
            <IllustrationPage />
          </Route>
          <Route exact path="/admin/photography">
            <PhotographyPage />
          </Route>
          <Route exact path="/admin/updates">
            <UpdatesPage />
          </Route>
          <Route exact path="/admin/ux">
            <UIUXPage />
          </Route>
          <Route exact path="/admin/videos">
            <VideosPage />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
}

export default App;
