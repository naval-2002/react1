import Bottom from "./components/bottom";
import Head from "./components/head";
import { useState } from "react";
import menu from "./components/data";
function App() {
  let [data, setData] = useState(menu);
  let tempData = menu;
  console.log(tempData);
  console.log(data);
  const Category = (type) => {
    let response;
    // if (type === "all") {
    //   let data = [];
    //   .map((value) => {
    //     data = value;

    //     // setData(bdata);
    //   });
    //   console.log(data);
    //   setData(data);
    // }
    if (type === "break") {
      let bdata = [];
      tempData.map((value) => {
        if (value.category == "breakfast") {
          bdata.push(value);
        }

        // setData(bdata);
      });
      console.log(bdata);
      setData(bdata);
    }
    if (type === "lunch") {
      let ldata = [];
      tempData.map((value) => {
        if (value.category == "lunch") {
          ldata.push(value);
        }

        // setData(bdata);
      });
      console.log(ldata);
      setData(ldata);
    }
    if (type === "shake") {
      let sdata = [];
      tempData.map((value) => {
        if (value.category == "shakes") {
          sdata.push(value);
        }

        // setData(sdata);
      });
      console.log(sdata);
      setData(sdata);
    }
    return (response = data.map((value) => (
      <Bottom key={value.id} data={value} />
    )));
  };
  // let breakf = () => {
  //   let breakfast = [];
  //   tempData.map((value) => {
  //     if (value.category == "breakfast") {
  //       breakfast.push(value);
  //     }
  //     setData(breakfast);
  //   });
  // };
  // let lunchCategory = () => {
  //   let Lunch = [];
  //   data.map((value) => {
  //     if (value.category == "lunch") {
  //       Lunch.push(value);
  //     }
  //     setData(Lunch);
  //   });
  // };
  // let shakeCategory = () => {
  //   let shake = [];
  //   data.map((value) => {
  //     if (value.category == "shakes") {
  //       shake.push(value);
  //     }
  //     setData(shake);
  //   });
  // };
  let result = <Head category={Category} />;

  return (
    <div className="App">
      {result}
      <Bottom res={response} />
    </div>
  );
}

export default App;
