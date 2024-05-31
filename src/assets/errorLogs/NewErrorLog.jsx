import faunadb from 'faunadb';
var q = faunadb.query

var client = new faunadb.Client({
  secret: FAUNA_SECRET,
  // NOTE: Use the correct endpoint for your database's Region Group.
  endpoint: FAUNA_ENDPOINT,
})

const NewErrorLog = (application, logLevel, errorCode, message, additionalInformation) => {
    console.log(application)
    const test = async () => {
        try {
            // Insert a log entry into ApplicationLogs
            await client.query(
                q.Create(
                q.Collection('ApplicationLogs'),
                {
                    data: {
                    applicationName: application,
                    timestamp: q.Now(),
                    logLevel: logLevel,
                    errorCode: errorCode,
                    message: message,
                    additionalInfo: additionalInformation
                    }
                }
                )
            );
            console.log('Log entry inserted into ApplicationLogs.');
        } catch (error) {
            console.error('Error:', error);
          }
    }
    test();
};

export default NewErrorLog;

// data: {
//     applicationName: 'App1',
//     timestamp: q.Now(),
//     logLevel: 'error',
//     errorCode: 'E001',
//     message: 'An unexpected error occurred.',
//     additionalInfo: {
//       userId: '12345',
//       transactionId: 'abc123'
//     }