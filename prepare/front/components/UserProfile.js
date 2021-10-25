import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import Link from 'next/link';
// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction()); // 로그인 상태 false
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {me.Posts.length}
        </div>,
        <Link href="profile">
          <div key="following">
            팔로잉
            <br />
            {me.Followings.length}
          </div>
        </Link>,
        <Link href="profile">
          <div key="follower">
            팔로워
            <br />
            {me.Followers.length}
          </div>
        </Link>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
      <Button onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
