import faunadb from 'faunadb';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Button';
import FilterSection from '../components/Filter/FilterSection';
import ai_logo from '../assets/images/icons/ai_logo.svg';
import { createSortingIndex } from '../db/Indexes';

const q = faunadb.query;

const client = new faunadb.Client({
  secret: FAUNA_SECRET,
  endpoint: FAUNA_ENDPOINT,
});

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    //createSortingIndex();

    // Fetch logs from FaunaDB
    const fetchLogs = async () => {
      try {
        // Query to get logs by application name and sort by timestamp
        const logsByApp = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index('logs_by_applicationName_and_timestamp'), 'Vartana')),
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
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const mylogs = async () => {
    console.log(FAUNA_ENDPOINT);
    try {
      // Find logs for a specific application
      const logsByApp = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index('logs_by_applicationName'), 'App1')),
          q.Lambda('X', q.Get(q.Var('X')))
        )
      );
      console.log('Logs for application App1:', logsByApp);

      // Find logs by error code
      const logsByErrorCode = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index('logs_by_errorCode'), 'E001')),
          q.Lambda('X', q.Get(q.Var('X')))
        )
      );
      console.log('Logs with error code E001:', logsByErrorCode);

      // Get error code details
      const errorCodeDetails = await client.query(
        q.Get(q.Match(q.Index('errorCodes_by_errorCode'), 'E001'))
      );
      console.log('Error code details for E001:', errorCodeDetails);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <main className='container-main' style={{ width: '78%' }}>
        <h3 style={{ width: '94%', margin: '20px auto' }}>Error Logs</h3>
        <section style={{ position: 'absolute', marginTop: '0px', right: '100px' }}>
          <FilterSection />
        </section>
        <div>
          {logs.map((log, index) => (
            <Card key={index} style={{ position: 'relative', marginBottom: '8px', height:'150px' }}>
              <Card.Header style={{ paddingBottom: '3px' }}>
                {log.data.applicationName}
              </Card.Header>
              <cite
                style={{ position: 'absolute', right: '40px', top: '20px' }}
                title="Source Title"> {new Date(log.data.timestamp.value).toLocaleString()}
              </cite>
              <Card.Body style={{ paddingTop: '2px'}}>
                <h6>{log.data.logLevel} - {log.data.errorCode}</h6>
                <Card.Text className="mb-0">
                  {log.data.message}
                </Card.Text>
                {/* <Alert
                  variant="dark"
                  size="sm"
                  style={{ position: 'absolute', right: '40px', bottom: '20px', height: '44px' }}
                >
                  <img src={ai_logo} alt="logo" style={{ width: '42px', marginTop: '-5px', marginLeft: '-5px', marginRight: '5px' }} />
                  Suggest Solutions
                </Alert> */}
              </Card.Body>
              <Card.Footer className="blockquote-footer" style={{ visibility:'hidden'}}>
                <strong>Additional Info:</strong>
                {Object.entries(log.data.additionalInfo).map(([key, value]) => (
                  <li key={key}>{key}: {value}</li>
                ))}
              </Card.Footer>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}

export default Logs;
