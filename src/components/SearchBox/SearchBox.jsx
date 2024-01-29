import { useId } from 'react';

export const SearchBox = ({ value, onChange }) => {
  const filterId = useId();

  return (
    <>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" value={value} onChange={evt => onChange(evt.target.value)} id={filterId} />
    </>
  );
};
