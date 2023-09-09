import './Spinner.css'; 

function Spinner() {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner">
        <div className="logo">
          <a href={'/'}>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
