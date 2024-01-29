export const Contact = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
