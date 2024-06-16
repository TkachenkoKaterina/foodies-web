import styles from './UserInfo.module.scss';
import { UploadButton } from '../../ui-kit';
import { getImagePath, TYPE_IMG } from '../../helpers/getImagePath';

const UserInfo = ({ isOwner, user, userImg, onUpdateAvatar }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <div className={styles.img}>
          <img src={getImagePath(userImg, TYPE_IMG.AVATAR)} alt={user?.name} />
        </div>
        {isOwner && <UploadButton onChange={onUpdateAvatar} />}
      </div>
      <p className={styles.name}>{user?.name}</p>
      <ul className={styles.list}>
        <InfoItem title="Email" value={user?.email} />
        <InfoItem title="Added recipes" value={user?.recipes} />
        {isOwner && <InfoItem title="Favorites" value={user?.favorites} />}
        <InfoItem title="Followers" value={user?.followers} />
        {isOwner && <InfoItem title="Following" value={user?.following} />}
      </ul>
    </div>
  );
};

export default UserInfo;

const InfoItem = ({ title, value }) => {
  return (
    <li className={styles.item}>
      <span className={styles.title}>{title}:</span>
      <span className={styles.value}>{value}</span>
    </li>
  );
};
