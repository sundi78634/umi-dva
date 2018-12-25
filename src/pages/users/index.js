/**
 * @author Sun
 * @description user
 */

import { connect } from 'dva';
import { Button } from 'antd';
import router from 'umi/router';

function Users({ location, dispatch, users }) {
  
  const { dataSource } = users;
  
  return (
    <div>
      {dataSource.map((data, index) => <div key={index}>{data.name}</div>)}
      <Button onClick={() => router.goBack()}>go back</Button>
    </div>
  );
}

export default connect(users => users)(Users);
