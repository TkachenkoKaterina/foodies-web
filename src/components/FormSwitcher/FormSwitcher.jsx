import SignUpModal from '../SignUpModal/SignUpModal';
import SignInModal from '../SignInModal/SignInModal';
import { MODAL_TYPES } from '../../constants/common';

const FormSwitcher = ({ type }) => {
  if (type === MODAL_TYPES.LOGIN) {
    return <SignInModal isOpen={true} />;
  }
  if (type === MODAL_TYPES.REGISTER) {
    return <SignUpModal isOpen={true} />;
  }
  return null;
};

export default FormSwitcher;
