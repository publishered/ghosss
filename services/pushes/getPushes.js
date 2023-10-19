import instance from '../instance';

export default async function(auth_token) {
   const response = await instance.get(`pushes/getPushes.php?auth_token=${auth_token}`)

   return response.data
}