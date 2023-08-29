import './index.css';

function Loader() {
  return (
    <div className="loader">
      <div className="lds-spinner">
        {Array.from({ length: 12 }, (_, idx) => (
          <div key={String(idx)} />
        ))}
      </div>
    </div>
  );
};

export default Loader;