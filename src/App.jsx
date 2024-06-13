import 'modern-normalize';

import './styles/styles.scss';
import Layout from './components/Layout';
import RoutesSwitch from './Router';
import CurrentUser from './CurrentUser';
import SignUpModal from './components/SignUpModal/SignUpModal';
import CustomModal from './components/CustomModal/CustomModal';

const App = () => {
  return (
    <>
      <CurrentUser>
        <Layout>
          <RoutesSwitch />
        </Layout>
      </CurrentUser>
      <SignUpModal isOpen={true} />
    </>
  );
};

export default App;
