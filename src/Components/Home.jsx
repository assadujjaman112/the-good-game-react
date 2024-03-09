import { useState } from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allData = useLoaderData();
  const [data, setData] = useState(allData);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.search.value;
    const searchedItem = allData?.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setData(searchedItem);
  };
  if (data.length <= 0) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <p className="text-red text-4xl font-bold">No Product Found.....</p>
      </div>
    );
  }
  return (
    <div>
      <div className="w-4/5 mx-auto py-10">
        <form onSubmit={handleSearch} className="w-2/3 mx-auto">
          <input
            type="text"
            name="search"
            id=""
            className="w-4/5 bg-blue-200 pl-6 text-black py-2 rounded-l-lg"
            placeholder="Search here..."
          />
          <input
            type="submit"
            value="Search"
            className="px-10 py-2 text-white bg-blue-500 rounded-r-lg cursor-pointer"
          />
        </form>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 w-11/12 mx-auto">
        {data?.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
