import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="apex-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;