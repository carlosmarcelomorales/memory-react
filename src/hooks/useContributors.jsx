import { useEffect, useState } from "react";

function useContributors() {
  const [contributors, setContributors] = useState([]);
  const [shuffledContributors, setShuffledContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        await fetch(
          "https://api.github.com/repos/facebook/react/contributors?per_page=25",
        )
          .then((res) => res.json())
          .then((data) => data.map((item) => item.avatar_url))
          .then((data) => setContributors(data));
      } catch (error) {
        console.log("Error fetching contributors: ", error);
      }
    };

    fetchContributors();
  }, []);

  useEffect(() => {
    if (contributors.length > 0) {
      const shuffledContributors = shuffleContributors(
        duplicateContributors(getRandomContributors(contributors)),
      );
      console.log(shuffledContributors);
      setShuffledContributors(shuffledContributors);
    }
  }, [contributors]);

  return { shuffledContributors };
}

function getRandomContributors(contributors) {
  const randomContributors = [];
  const contributorsCopy = [...contributors];

  while (randomContributors.length < 6 && contributorsCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * contributorsCopy.length);
    const randomContributor = contributorsCopy.splice(randomIndex, 1)[0];
    randomContributors.push(randomContributor);
  }

  return randomContributors;
}

function duplicateContributors(contributors) {
  return contributors.flatMap((contributor) => [contributor, contributor]);
}

function shuffleContributors(contributors) {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return shuffleArray(contributors);
}

export { useContributors };
