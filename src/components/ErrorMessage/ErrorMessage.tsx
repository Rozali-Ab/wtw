import Logo from '../Logo/Logo';

function ErrorMessage() {
  return (
    <div className="user-page">
      <div className="catalog">
        <h1>Oops</h1>
        <p>Data is not loaded.<br/>Try again</p>
      </div>
      <Logo isLight/>
    </div>
    
  );
}

export default ErrorMessage;
