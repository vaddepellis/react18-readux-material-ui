import React from 'react'
import Navbar from '../header/Navbar';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Navbar />
  )
}

export default Home