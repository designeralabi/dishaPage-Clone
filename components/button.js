const button = ({ ...props }) => {
  return (
    <>
      <button className={props.className}>{props.title}</button>
    </>
  );
};
export default button;
