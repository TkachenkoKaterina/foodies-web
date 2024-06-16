import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { getImagePath, TYPE_IMG } from '../../helpers/getImagePath';
import styles from './RecipeCreatedBy.module.scss';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { MODAL_TYPES } from '../../constants/common';

const RecipeCreatedBy = ({ ownerId, name, avatar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBtnClick = () => {
    if (isLoggedIn) {
      navigate(`/user/${ownerId}`);
    } else {
      dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
    }
  };

  return (
    <div className={styles.recipe_created_by_wrap}>
      <button className={styles.recipe_created_by} onClick={handleBtnClick}>
        <div className={styles.avatar_wrap}>
          <img src={getImagePath(avatar, TYPE_IMG.AVATAR)} alt={name} />
        </div>
        <div className={styles.name_wrap}>
          <p className={styles.created_by}>Created by:</p>
          <p className={styles.name}>{name}</p>
        </div>
      </button>
      {/* <SignInModal isOpen={isModalOpen} onRequestClose={closeModal} /> */}
    </div>
  );
};

RecipeCreatedBy.propTypes = {
  ownerId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default RecipeCreatedBy;
