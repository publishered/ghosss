import instance from '../instance';

export default async function(auth_token, ssl, domain) {
   const response = await instance.post(`settings/setDomainSettings.php`, {
      auth_token,
      ssl,
      domain,
   })

   return response.data
}