import instance from '../instance';

export default async function(auth_token, thread_id) {
   const response = await instance.post(`threads/deleteThread.php`, {
      auth_token,
      thread_id
   })

   return response.data
}