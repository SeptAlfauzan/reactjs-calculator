export default function ButtonPad({ value, action, id, key }) {
  return (
    <button value={value} onClick={action} id={id} key={key}>
      {value}
    </button>
  );
}
