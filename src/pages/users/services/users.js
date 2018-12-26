/**
 * @author Sun
 * @description users services
 */
 
import request from '../../../utils/request';

export function fetch() {
  return request(`/api/users`);
}
