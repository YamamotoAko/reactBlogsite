export default function Button({
  label = "button",
  onClick = () => console.log(""),
}) {
  return (
    <button onClick={onClick} type="button" className="modalButton">
      {label}
    </button>
  );
}