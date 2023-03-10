import React, { useState } from 'react';
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
  id: number;
  user: any;
  text: string;
  createdAt: string;
  currentUserId: number;
  onRemove: (id: number) => void;
}

const Comment: React.FC<CommentPostProps> = ({ id, user, text, createdAt, currentUserId, onRemove }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {

  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{user.fullName}</Avatar>
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      {/* {user.id === currentUserId && ( */}
      <>
        <span className={styles.replyBtn}>Ответить</span>
        <IconButton onClick={handleClick}>
          <MoreIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} elevation={2} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
          <MenuItem onClick={handleClickRemove}>Удалить</MenuItem>
          <MenuItem onClick={handleClose}>Редактировать</MenuItem>
        </Menu>
      </>
      {/* )} */}
    </div>
  );
};

export default Comment