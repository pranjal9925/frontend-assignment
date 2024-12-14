import { useEffect } from "react";
import useFetchData from "./hooks/useFetchData";
import "./App.css";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  const { fetchDataFromApi, loading, data } = useFetchData();

  useEffect(() => {
    fetchDataFromApi();
  }, [fetchDataFromApi]);

  return (
    <div className="container">
      <Header />
      <Table data={data} loading={loading} />
    </div>
  );
}

export default App;
