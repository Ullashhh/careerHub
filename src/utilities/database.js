const addToDb = (title) => {
    let jobInfo = getJobInfo()
    const job = jobInfo[title]
    if(!job) {
        jobInfo[title] = 'job'
    }else{
        alert('You have already add this job')
    }
    localStorage.setItem('job-list', JSON.stringify(jobInfo))
}


const getJobInfo = () => {
    let jobInfo = {}
    const isJob = localStorage.getItem('job-list')
    if(isJob){
        jobInfo = JSON.parse(isJob)
    }
    return jobInfo
}





export {addToDb, getJobInfo}