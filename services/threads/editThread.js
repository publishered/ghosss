import instance from '../instance';

export default async function(formData) {
   const response = await instance.post('threads/addThread.php', formData, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      }
   })

   return response.data
}