import React, { useEffect,useState } from 'react'
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import { Section, Container } from '@components/global';
import { getJobById } from "../services/jobService"
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { navigate } from '@reach/router';

const JobDetail = (props) => {

  const [job, setJob] = useState();

  useEffect(() => {
    let id = new URLSearchParams(props.location.search).get("id");
    if(id !== 0){
        getJobById(id).then(response => {
            if(response.status === 200){
                setJob(response.data);
            }
        });
    }
  }, [])

  function ToJobForm(jobdetail){
    navigate("/jobform/",{
      state : {
        job
      }
    });
  }

  return (
  <Layout>
    <Navbar />
        <Section>
        <Container>
            {
                job &&  <>
                <h1>Summary</h1><hr/>
                <h2>{job.jobTitle}</h2><br/>
                <p>Salary : RM {job.jobSalary}</p>
                <p>Department : {job.jobDepartment}</p>
                <p>Location : {job.jobLocation}</p>
                <hr/>
                <h2>About the role</h2><br/>
                <p>
                    {job.jobDesc}
                </p>
                <Button variant="success" size="lg" onClick={() => ToJobForm(job)}>
                  Apply Now
                </Button>{' '} </>
            }

        </Container>
        </Section>
    <Footer />
  </Layout>

  )
};

export default JobDetail;
