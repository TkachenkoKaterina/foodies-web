import styles from './NetworkLinks.module.scss';
import { links } from '../../constants/links';
import icons from '../../images/icons.svg';

const list = [
  {
    id: '1',
    href: links.facebook,
    icon: 'icon-facebook',
  },
  {
    id: '2',
    href: links.instagram,
    icon: 'icon-instagram',
  },
  {
    id: '3',
    href: links.youtube,
    icon: 'icon-youtube',
  },
];

const NetworkLinks = () => {
  return (
    <ul className={styles.list}>
      {list.map(item => (
        <Item key={item.id} href={item.href} icon={item.icon} />
      ))}
    </ul>
  );
};

export default NetworkLinks;

const Item = ({ href, icon }) => {
  return (
    <li className={styles.item}>
      <a
        href={href}
        className={styles.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg className={styles.icon}>
          <use href={`${icons}#${icon}`} />
        </svg>
      </a>
    </li>
  );
};
