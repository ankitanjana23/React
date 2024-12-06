function MyButton({ color ,handleClick}) {
  return (
    <>
      <button onClick = {handleClick} style={{ backgroundColor: color}}>
        {color}
      </button>
    </>
  );
}

export default MyButton;


