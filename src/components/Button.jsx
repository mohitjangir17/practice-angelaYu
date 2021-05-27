function Button({ type, onSubmit, text, onMouseOut, onMouseOver, onClick }) {
  return (
    <button
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      type={type}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}
export default Button;
