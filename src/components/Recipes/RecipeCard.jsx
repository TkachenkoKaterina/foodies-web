export const RecipeCard = ({
  title,
  description,
  owner,
  img,
  _id,
  navigatetoUserPage,
  navigateToSignIN,
}) => {
  const user = 'current user';
  return (
    <li key={_id}>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        type="button"
        onClick={user ? navigatetoUserPage : navigateToSignIN}
      >
        <img src={owner.awatar} alt="Avatar" />
        <p>{owner.name}</p>
      </button>
      <button></button>
    </li>
  );
};
