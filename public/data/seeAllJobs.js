const seeAllJobs = async () => {
  const response = await fetch("./jobs.json");
  const data = await response.json();
  return data;
};

export default seeAllJobs;
