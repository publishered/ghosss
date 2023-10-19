import instance from '../instance';

export default async function(auth_token, fromDate, toDate, thread_id, push_id) {
   const response = await instance.get(`statistic/getStatistic.php?auth_token=${auth_token}&fromDate=${fromDate}&toDate=${toDate}${thread_id ? `&thread_id=${thread_id}` : ''}${push_id ? `&push_id=${push_id}` : ''}`)

   return response.data
}