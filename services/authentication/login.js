import instance from '../instance';

export default async function(username, password) {
   const response = await instance.post('action/login.php', {
      username,
      password
   })

   return response.data
}