import instance from '../instance';

export default async function(auth_token) {
   const response = await instance.get(`popups/getPopups.php?auth_token=${auth_token}`)

   return response.data
}