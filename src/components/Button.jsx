function Button({ step, increment, decrement }) {
  return (
    <>
      <button
        onClick={() => {
          increment(step);
        }}
      >
        +{step}
      </button>
      <button
        onClick={() => {
          decrement(step);
        }}
      >
        -{step}
      </button>
    </>
  );
}

export default Button;
