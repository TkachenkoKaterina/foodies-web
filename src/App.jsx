import 'modern-normalize';

import './styles/styles.scss';
import Layout from './components/Layout';
import RoutesSwitch from './Router';

const App = () => {
  return (
    <Layout>
      <RoutesSwitch />
    </Layout>
  );
};

export default App;
