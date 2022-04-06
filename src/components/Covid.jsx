import React, { useEffect, useState } from "react";
import "./Covid.css";

export default function Covid() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const curData = await res.json();
      setData(curData.statewise);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font">INDIA</span> COVID-19 DASHBOARD
          </h1>
        </div>
        <div className="table-responsive ">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <th>{curElem.state}</th>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
