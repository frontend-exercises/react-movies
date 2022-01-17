import React from "react";

export interface RootObject {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function App() {
  const [data, setData] = React.useState<RootObject[]>([]);
  const get = async () => {
    await fetch("https://www.omdbapi.com/?apikey=55fd32b7&s=spider&page=3")
      .then((res) => res.json())
      .then((json) => json)
      .then((json) => setData(json.Search))
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    get();
  }, []);

  return (
    <div className="App">
      <h1>rgrg</h1>
      {data.map((item) => (
        <div key={item.imdbID}>
          <h2>{item.Title}</h2>
          <b>{item.Year}</b>
          <b>{item.Type}</b>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
