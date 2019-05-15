import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

import * as twilio from 'twilio';
const { sid, auth_token } = functions.config().twilio;
const robocaller = twilio(sid, auth_token);

interface Workers {
  [key: string]: (options: any) => Promise<any>;
};

const workers: Workers = {
  helloWorld: () => db.collection('logs').add({ hello: 'world' }),

  makeCall: async ({ phoneNum, twimletUrl }) => {
    const call = await robocaller.calls.create({
      to: phoneNum,
      from: '+18016147190',
      url: encodeURI(twimletUrl),
      method: 'GET'
    });

    console.log(call.toJSON());

    return call.sid;
  }
}

export const taskRunner = functions.runWith({ memory: '2GB' }).pubsub
  .schedule('* * * * *').onRun(async () => {

    const now = admin.firestore.Timestamp.now();
    const query = db.collection('tasks')
      .where('performAt', '<=', now)
      .where('status', '==', 'scheduled');
    const tasks: Array<any> = await query.get();

    const jobs: Promise<any>[] = [];

    tasks.forEach(snapshot => {
      const { worker, options } = snapshot.data();

      if (!worker || !workers[worker]) { return; }

      const job = workers[worker](options)
        .then(() => snapshot.ref.update({ status: 'complete' }))
        .catch((err) => { console.error(err); return snapshot.ref.update({ status: 'error' }); });

      jobs.push(job);
    });

    return await Promise.all(jobs);
});
