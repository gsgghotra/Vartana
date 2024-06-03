// List of applications
import faunadb from 'faunadb';
var q = faunadb.query;
import NewErrorLog from '../errorLogs/NewErrorLog'

var client = new faunadb.Client({
  secret: FAUNA_SECRET,
  // NOTE: Use the correct endpoint for your database's Region Group.
  endpoint: FAUNA_ENDPOINT,
})

export const createApplicationsIndex = async () => {
    try {
      const result = await client.query(
        q.CreateIndex({
          name: 'all_applications',
          source: q.Collection('ApplicationLogs'),
          terms: [],
          values: [
            { field: ['data', 'applicationName'] },
          ],
          unique: true,
          serialized: true,
        })
      );
      console.log('Applications index created:', result);
    } catch (error) {
        //NewErrorLog("Vartana", {error}, "E603", "Unexpected errors", {data:'Hello', type:'testing'})
        console.error('Error creating applications index:', error);
    }
};

// Ensure the index is created (if not already done)
//List of errors

export const createSortingIndex = async () => {
    try {
        await client.query(
        q.CreateIndex({
            name: 'logs_by_applicationName_and_timestamp',
            source: q.Collection('ApplicationLogs'),
            terms: [{ field: ['data', 'applicationName'] }],
            values: [
            { field: ['data', 'timestamp'], reverse: true }, // reverse for descending order
            { field: ['ref'] }
            ]
        })
        );
    } catch (error) {
        // Index already exists
        console.log('Index creation error or already exists:', error);
    }
    };
