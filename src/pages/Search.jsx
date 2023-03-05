import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchListItem from "../features/dashboard/components/SearchListItem";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Search = () => {
  const { state } = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosPrivate
      .get("/user", { params: { q: state.query } })
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.length === 0 ? (
    <div>No results</div>
  ) : (
    <div>
      {data.map((item) => {
        const props = {
          id: item.id,
          username: item.username,
          firstname: item.firstname,
          lastname: item.lastname,
          gym: item.userProfile.gym,
          city: item.userProfile.city,
        };
        return <SearchListItem key={item.id} {...props} />;
      })}
    </div>
  );
};

export default Search;
