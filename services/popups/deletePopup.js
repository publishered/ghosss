import instance from '../instance';

export default async function(auth_token, popup_id) {
   const response = await instance.post(`popups/deletePopup.php`, {
      auth_token,
      popup_id
   })

   return response.data
}