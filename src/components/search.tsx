//function based
//class based
//uncontrolled based
//controlled based

export default function Search(props) {
  const { search, handleChange } = props;

  return (
    <div>
      <input
        type="text"
        className="border rounded py-2 px-3"
        value={search}
        onChange={handleChange}
        placeholder="Search"
      />
      <h1>Search Result:{search}</h1>
    </div>
  );
}
