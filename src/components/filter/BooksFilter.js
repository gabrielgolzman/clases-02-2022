import "./BooksFilter.css";

const BooksFilter = ({ yearChanged, filterYear }) => {
  const selectChangeHandler = (event) => {
    yearChanged(event.target.value);
  };

  return (
    <div className="Books-filter">
      <div className="Books-filter__control">
        <label>Filter by year</label>
        <select value={filterYear} onChange={selectChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default BooksFilter;
