import 'modern-normalize';

import './styles/styles.scss';
import Layout from './components/Layout';
import RoutesSwitch from './Router';
import CurrentUser from './CurrentUser';

const App = () => {
  return (
    <>
      <CurrentUser>
        <Layout>
          <RoutesSwitch />
        </Layout>
      </CurrentUser>
    </>
  );
};

export default App;
