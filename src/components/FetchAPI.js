import React, { useEffect, useState } from 'react';

function FetchAPI() {
    const [province, setProvince]= useState([]);
    useEffect(()=>{
        fetch('https://vapi.vnappmob.com/api/province/')
        .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
        })
        .then(function(responseAsJson) {
        // Do stuff with the JSON
        setProvince(responseAsJson.results)
        console.log(responseAsJson.results);
        })
        .catch(function(error) {
        console.log('Looks like there was a problem: \n', error);
        });
    },[])
    return (
        <div>
          <p>api province</p>
          <select>
            {
                province.map((item, index)=>{
                    return <option value={item.province_id} key={index}>{item.province_name}</option>
                })
            }
          </select>
        </div>
      );
}

export default FetchAPI;
