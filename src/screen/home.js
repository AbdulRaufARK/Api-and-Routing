import React from 'react'
import { useState } from 'react';
import axios from 'axios';


function Home() {
    const [data, setData] = useState([]);
    let api = "https://jsonplaceholder.typicode.com/posts";
  
    let getAPIData = () => {
      axios
        .get(api)
        .then((res) => {
          console.log(res);
          setData([...res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .post(api, {
          body: "Custom Body",
          title: "ABH",
          userId: 1,
        })
        .then((res) => {
          console.log("Data send Successfully", res);
        })
        .catch((err) => {
          console.log(err);
        });
  
      axios
        .put(api + "/1", { body: "Custom Body" })
        .then((res) => {
          console.log("Data send Successfully", res);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .delete(api)
        .then((res) => {
          console.log("Data Deleted Successfully", res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <>
        <div>
          <button className='App-header'
           onClick={getAPIData} variant="contained">
            Get Data 1
          </button>
          {data.map((e, i) => (
            <div>
              <p>{e.title}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
  

export default Home