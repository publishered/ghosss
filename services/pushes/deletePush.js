import instance from '../instance';

export default async function(auth_token, push_id) {
   const response = await instance.post(`pushes/deletePush.php`, {
      auth_token,
      push_id
   })

   return response.data
}