import { useState } from "react";

const [data, setData] = useState();

function searchQuery(query) {
  fetch(
    `https://api.themoviedb.org/3/search/company?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&query=${query}&page=1`
  )
    .then((response) => response.json())
    .then((data) => setData(data));
}

export default data;
