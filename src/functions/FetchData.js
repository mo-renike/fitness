export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "15dac254c0msh02bccc4a3102f81p1fd011jsn940355ce24a1",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15dac254c0msh02bccc4a3102f81p1fd011jsn940355ce24a1",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const FetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
