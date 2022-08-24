import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from 'src/constants/localStorage';

function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    if (!accessToken) navigate('/');
  }, [navigate]);
  return <div>Todo</div>;
}

export default Todo;
