import ContentShimmer from "./components/ContentShimmer";
import { useEffect, useState } from "react";
function App() {
  const[value, setValue] = useState([])

  async function apiCall(param){
    const apiDetails = await fetch('https://jsonplaceholder.typicode.com/'+param)
    const apiData = await apiDetails.json()
    setValue(apiData)
  }
  
  useEffect(()=> {
    apiCall('users')
  },[])
  
  return (Object.keys(value).length == 0)? <ContentShimmer/> : (
      <div className="App">
      <ul className="list-none flex justify-between p-8 bg-cyan-500" >
          <li className="text-white text-2xl text-bold hover:bg-red-300 px-8 py-3 cursor-pointer bg-yellow-300" onClick={() => apiCall('users')}>Users</li>
          <li className="text-white text-2xl text-bold hover:bg-red-300 px-8 py-3 cursor-pointer bg-yellow-300" onClick={() => apiCall('posts')}>Posts</li>
          <li className="text-white text-2xl text-bold hover:bg-red-300 px-8 py-3 cursor-pointer bg-yellow-300" onClick={() => apiCall('comments')}>Comments</li>
        </ul>
        <div className="grid grid-cols-4 gap-8 p-4">
        {
           value?.map((item) => {
              return (
                <div className="p-4 border rounded-lg cursor-pointer hover:bg-yellow-100" key={item.id}>
                  <p className="text-8xl text-bold text-red-600">{item?.id}</p>
                  <p className="text-3xl capitalize">{item?.title}</p>
                  <p className="text-3xl capitalize">{item?.name}</p>
                  <p>{item?.username}</p>
                  <p>{item?.email}</p>
                  <p>{item?.body}</p>
                  <p>{item?.address?.street}</p>
                </div>
              )
          }) 
        }
        </div>

        
</div>
)
  
}

export default App;
