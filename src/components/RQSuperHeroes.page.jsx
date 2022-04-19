import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get(`https://gorest.co.in/public/v2/users`);
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-heros", fetchSuperHeros);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2> React Query Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};
