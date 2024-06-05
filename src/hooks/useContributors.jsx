import { useEffect, useState } from "react";

function useContributors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        await fetch(
          "https://api.github.com/repos/facebook/react/contributors?per_page=25",
        )
          .then((res) => res.json())
          .then((data) => setData(data));
      } catch (error) {
        console.log("Error fetching contributors: ", error);
      }
    };

    fetchContributors();
  }, []);

  return { data };
}

export { useContributors };
