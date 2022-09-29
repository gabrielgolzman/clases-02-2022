import "./ReadDate.css";
import SettingsContext from "../../context/SettingsContext";
import { useContext } from "react";

const ReadDate = ({ dateRead }) => {
  dateRead = new Date(dateRead);
  const themeContextValue = useContext(SettingsContext); 

  return (
    <div className="date-container">
      <div>
        { dateRead.toLocaleDateString(themeContextValue.dateFormat) }
      </div>
    </div>
  );
};

export default ReadDate;
