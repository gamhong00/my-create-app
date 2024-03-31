import axios from 'axios';
import React, { useEffect, useState } from 'react';

  function AxiosAPI() {
      const [provinces, setProvinces]= useState([]);
      useEffect(()=>{
          axios.get('https://vapi.vnappmob.com/api/province/')
            .then(function (response) {
                // handle success
                setProvinces(response.data.results)
                console.log(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
      },[])
      return (
          <div>
            <p>api province</p>
            <select>
              {
                  provinces.map((item, index)=>{
                      return <option value={item.province_id} key={index}>{item.province_name}</option>
                  })
              }
            </select>
          </div>
        );
  }
  
  export default AxiosAPI;
  