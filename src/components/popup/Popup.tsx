import "./Popup.scss";

interface Props {
  action: () => void
}

const Popup = ({ action }: Props) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <button className="popup__close" onClick={action}>
          <span className="material-icons">close</span>
        </button>
        <div className="popup__icon-container">
          <span className="material-icons-outlined popup__icon">insights</span>
        </div>
        <p className="popup__content">
          We're creating a community of fashion enthusiasts to create magic.
          Registration links will be out soon
        </p>
      </div>
    </div>
  );
};

export default Popup;
