import React, { useState, useEffect } from "react";
import data from "../db/data";
import logoSvg from "../assets/logo.svg";
const itemsPerPage = 18;

const Search = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  // Retrieve data from Local Storage on initial load
  useEffect(() => {
    const storedData = localStorage.getItem("cardData");
    if (storedData) {
      setSearchResults(JSON.parse(storedData));
    } else {
      setSearchResults(data);
    }
  }, []);

  console.log(query);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    setCurrentPage(1); // Reset to the first page when the search query changes

    // Filter the data based on the input value
    const filteredResults = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(inputValue.toLowerCase())
      )
    );

    // Update the search results and save to Local Storage
    setSearchResults(inputValue ? filteredResults : data);
    localStorage.setItem(
      "cardData",
      JSON.stringify(inputValue ? filteredResults : data)
    );
  };

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100">
        <nav className="fixed top-0 z-10 w-full bg-purple-600">
          <div className="flex mx-auto">
            <div className="flex items-center justify-start w-11/12 mx-auto sm:w-3/4 lg:w-2/3">
              <a href="/HeavenHunter/home" className="text-blue-900 ">
                <div>
                  <button className="flex p-3 text-white bg-transparent i">
                    <img
                      src={logoSvg}
                      alt="Logo"
                      className="w-10 h-10 text-blue-400"
                    />
                    <span className="hidden text-2xl font-bold md:block">
                      HeavenHunter
                    </span>
                  </button>
                </div>
              </a>
            </div>
            <div className="items-center p-4 mx-auto w-25">
              <form className="flex bg-white rounded-full shadow-lg">
                <input
                  onChange={handleInputChange}
                  required
                  type="text"
                  placeholder="Search here"
                  className="flex-1 px-5 py-2 text-center text-gray-700 rounded-3xl md:text-left md:px-20 sm:px-4 sm:py-2 focus:outline-none"
                />
              </form>
            </div>
          </div>
        </nav>

        <section className="grid w-11/12 grid-cols-1 gap-5 pt-20 mx-auto lg:gap-x-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:w-3/4 ">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="mx-auto bg-white rounded-lg shadow-md card "
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-lg card-img"
              />
              <div className="p-4 card-details">
                <h3 className="text-lg font-semibold text-center card-title">
                  {item.title}
                </h3>
                <div className="mt-2 font-bold text-center text-indigo-600 card-price">
                  {item.price}
                </div>
                <div className="mt-2 card-info">
                  <div className="text-gray-600 card-type">{item.type}</div>
                  <div className="text-gray-600 card-location">
                    {item.location}
                  </div>
                </div>
                <div className="text-gray-600 card-specs">
                  <div className="specs-item">Bedrooms: {item.bedrooms}</div>
                  <div className="specs-item">Bathrooms: {item.bathrooms}</div>
                  <div className="specs-item">Size: {item.size} sqft</div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="flex justify-center pb-10 mt-4 list-style-none pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => onPageChange(index + 1)}
              className={`relative block p-2 bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300
        hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white ${
          currentPage === index + 1 ? "bg-indigo-600 text-white" : ""
        }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
