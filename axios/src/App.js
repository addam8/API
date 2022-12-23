import axios from "axios";
import React from "react";
import { useState , useEffect } from "react";
const baseURL = "https://jsonplaceholder.typicode.com/users";

function App(){

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((rep) => {
      setPost(rep.data);
    });
  }, []);

  if (!post) return null;
  
 
  return (
    <div className="Cart">
      {post.map((user) => (
        <div>
          
          {user.name}
          {user.email}
          {user.phone}
            
          </div>
        
      ))}
    </div>
  );
}
export default App;