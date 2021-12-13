import React, { useEffect,useState } from 'react'
import { getAllJobs } from "../../services/jobService"
import { Section, Container } from '@components/global';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { navigate } from '@reach/router';

const Job = () => {
  
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    getAllJobs().then(response => {
        if(response.status === 200){
            setJobList(response.data);
        }
    });
  }, [])
  
  function ToJobDetailPage(id){
      navigate(`/jobdetail?id=${id}/`);
  }

  return (
    <Section id="job" accent>
      <Container>
        <h1 align="center">Jobs</h1>
        <br/><hr/>
        <h2></h2>
        {
            jobList && jobList.map(item => <span key={item.id}>
                <h2>{item.jobTitle} </h2>
                <h3>{item.jobDepartment}</h3>
                <h4>{item.jobLocation}</h4>
                <p>{item.jobDesc}</p>
                <Button variant="success" onClick={() => ToJobDetailPage(item.id)}>More Details</Button>{' '}
                <hr/>
            </span>
            )
        }
      </Container>
    </Section>
  )
};

export default Job;
