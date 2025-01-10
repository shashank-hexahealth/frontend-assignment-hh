const Card = ({ children }) => {
  return <div style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}} className="flex justify-center items-center m-2.5 p-[100px] border border-solid border-[#ddd]">{children}</div>;
};

export default Card;
