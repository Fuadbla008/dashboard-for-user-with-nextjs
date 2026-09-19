import { fetch } from 'next/dist/client/components/segment-cache/fetch';

const fetchUserData = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
};

export default fetchUserData;