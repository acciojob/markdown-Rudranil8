// import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import "./App.css";

// function Markdown() {
//   const [markdown, setMarkdown] = useState("");
//   const [loading, setLoading] = useState(true);

//   const handleChange = (e) => {
//     setMarkdown(e.target.value);
//   };

//   const changeLoadingVar = () => {
//     setLoading(false);
//   };

//   useEffect(() => {
//     setTimeout(changeLoadingVar, 3000);
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading">
//         <h1>Loading...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <textarea className="textarea" onChange={handleChange} />
//       <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
//     </div>
//   );
// }

// export default Markdown;

// import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import "./App.css";

// function Markdown() {
//   const [markdown, setMarkdown] = useState("");
//   const [loading, setLoading] = useState(true);

//   const handleChange = (e) => {
//     setMarkdown(e.target.value);
//   };

//   const changeLoadingVar = () => {
//     setLoading(false);
//   };

//   useEffect(() => {
//     setTimeout(changeLoadingVar, 3000);
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading">
//         <h1>Loading...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <textarea className="textarea" onChange={handleChange} />
//       <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
//     </div>
//   );
// }

// export default Markdown;

// import React,{useState,useEffect} from "react";
// import Markdown from "react-markdown";
// import '../styles/App.css'

// function App(){

//   const [markdown,setMarkdown] = useState("")
//   // const [loading,setLoading] = useState(true)

//   const handleChange = (e) =>{
//     setMarkdown(e.target.value)
//   }
  
//   const changeLoadingVar = () => {
//     setLoading(false)
//   }

//   useEffect(() => {
//     setTimeout(changeLoadingVar,3000)
//   },[]);

//     if(loading){
//       return (<div><h1>Loading...</h1></div>)
//     }
 
//     return(
//       <div className="app">
//         <textarea onChange={handleChange}/>
//         <Markdown className="preview">{markdown}</Markdown>
//       </div>
//     )
// }

// export default App;

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function Markdown() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const changeLoadingVar = () => {
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(changeLoadingVar, 3000);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <textarea className="textarea" onChange={handleChange} />
      <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
    </div>
  );
}

export default Markdown;
