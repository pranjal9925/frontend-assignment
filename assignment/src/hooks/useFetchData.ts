import { useCallback, useState } from "react";
import { DataInterface } from "../interface";

function useFetchData() {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<DataInterface[] | null>(null);

  const fetchDataFromApi = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  return { data, loading, fetchDataFromApi };
}

export default useFetchData;
