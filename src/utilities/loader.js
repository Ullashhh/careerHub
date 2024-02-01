import { getJobInfo } from "./database";

const savedJobLoader = async () => {
  const loaderJob = await fetch("http://localhost:4000/allJobs");
  const jobsData = await loaderJob.json();
//   console.log(jobsData);
  const storedJob = getJobInfo();
//   console.log(storedJob)
  const savedJob = [];
  for (const title in storedJob) {
    // console.log(title)
    const foundJob = jobsData.find((item) => item.job_title == title);
    // console.log(foundJob)
    if (foundJob) {
      savedJob.push(foundJob);
    }
  }
  return savedJob;
};

export default savedJobLoader;