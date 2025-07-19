export default function Input({ value, onChange, placeholder }) {
  return (
    <>
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
}
