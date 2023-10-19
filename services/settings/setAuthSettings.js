import instance from '../instance';

export default async function(auth_token, username, password) {
   const response = await instance.post(`settings/setAuthData.php`, {
      auth_token,
      username,
      password,
   })

   return response.data
}