import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>Home</div>
  )
}

export default Home