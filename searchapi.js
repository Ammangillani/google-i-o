const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");
const loader = document.getElementById("loader");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", debounce(handleSearch, 300));
searchIcon.addEventListener("click", () => {
  searchInput.focus();
  handleSearch();
});

async function handleSearch() {
  const query = searchInput.value.trim();
  if (query.length === 0) {
    searchResults.innerHTML = "";
    return;
  }

  toggleLoader(true);
  const url = `https://restcountries.com/v2/name/${query}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    toggleLoader(false);
  }
}

function displayResults(data) {
  searchResults.innerHTML = "";
  data.forEach((country) => {
    const li = document.createElement("li");
    li.textContent = country.name;
    li.addEventListener("click", () => {
      alert(`You selected ${country.name}`);
    });
    searchResults.appendChild(li);
  });
}

function toggleLoader(show) {
  if (show) {
    loader.style.display = "inline-block";
    searchIcon.style.display = "none";
  } else {
    loader.style.display = "none";
    searchIcon.style.display = "inline-block";
  }
}

// Utility function to debounce input
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
