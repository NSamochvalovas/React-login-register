import React, {useEffect, useState} from 'react'

function Home() {
  const [data, setData] = useState();
  
  const getData = async () => {
    try{
      const res = await fetch (`https://lobster-app-qc8ib.ondigitalocean.app/v1/content`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      const resData = await (await res).json();
      setData(resData)
    } catch(err){
      setData(err.message)
    }
  }

  useEffect(()=> {
    getData();
  }, [])
  
  if(!data){
    return <div>Loading...</div>;
  }
  if(data){
    return <div>{data}</div>;
  }
  
}

export default Home