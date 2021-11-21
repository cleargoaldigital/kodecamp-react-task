import React from 'react';
import { useState } from 'react';

const BlogPost = () => {
    const [name, setName] = useState('Taofeek');
    const handleClick = () => {
        // setName = "Akanbi";
    
    }
    return (
        <div>
          <h1 className="title">ClearGoal Digital Concept</h1>
          <h3>This is my new blog</h3> 
          <h6>Motto: Learn | Build | Collaborate</h6> 
        {/* <button onClick = {handleClick}>Click here to change name</button> */}
        <p>Hello {name}</p>
        </div>
    )
}

export default BlogPost;
