/**
 *  * Created by Zhourundong on 2021-09-29.
 */
import { useEffect, useState } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status = { isOnline: false }) {
      setIsOnline(status.isOnline);
    }
    handleStatusChange();
  });
  return isOnline;
}
