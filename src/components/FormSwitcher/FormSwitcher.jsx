import SignUpModal from '../SignUpModal/SignUpModal';
import SignInModal from '../SignInModal/SignInModal';

const FormSwitcher = ({ state, togle, onRequestClose }) => {
  return state ? (
    <SignInModal togle={togle} isOpen={true} onRequestClose={onRequestClose} />
  ) : (
    <SignUpModal togle={togle} isOpen={true} onRequestClose={onRequestClose} />
  );
};

export default FormSwitcher;
