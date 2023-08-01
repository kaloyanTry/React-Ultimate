import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classname = 'text-sm text-blue-500 hover:text-blue-600';

  if (to === '-1') {
    <button onClick={() => navigate(-1)}>{children}</button>;
  }
  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
}

export default LinkButton;
