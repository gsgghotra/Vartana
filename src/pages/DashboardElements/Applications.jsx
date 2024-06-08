import React, { useState, useEffect } from 'react';
import faunadb from 'faunadb';
import Card from 'react-bootstrap/esm/Card';
import { createApplicationsIndex } from '../../db/Indexes';

const q = faunadb.query;

const client = new faunadb.Client({
  secret: FAUNA_SECRET,
  endpoint: FAUNA_ENDPOINT,
});
  
const Applications = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedApp, setSelectedApp] = useState('Vartana');
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch the list of applications (assuming this is available)
    const fetchApplications = async () => {
      try {
        //createApplicationsIndex();
        const apps = await client.query(
          q.Paginate(q.Distinct(q.Match(q.Index('all_applications'))))
        );
        setApplications(apps.data);
      } catch (err) {
        console.error('Error fetching applications:', err);
      }
    };

    fetchApplications();
  }, []);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      try {
        const logsByApp = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index('logs_by_applicationName_and_timestamp'), selectedApp)),
            q.Lambda('X', q.Get(q.Select([1], q.Var('X'))))
          )
        );
        setLogs(logsByApp.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [selectedApp]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <main className='pt-2' style={{ width: '100%' }}>
        <div>
          {/* <select
            id="app-select"
            value={selectedApp}
            onChange={(e) => setSelectedApp(e.target.value)}
          > */}
            {applications.map((app, index) => (
                    <Card key={index} style={{ width: '18rem', marginRight:'10px', marginBottom:'10px', float:'left'}}>
                        <Card.Body>
                            <Card.Title>{app}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                23/12/12 - 12:12
                            </Card.Text>
                            <Card.Link href="#">View Logs</Card.Link>
                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
            ))}
          {/* </select> */}
        </div>
      </main>
    </>
  );
}

export default Applications;
