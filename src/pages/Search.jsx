import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Search = () => {
  const { state } = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosPrivate
      .get("/user/", { query: state.query })
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{`You've serached for ${state.query}`}</div>;
};

export default Search;
