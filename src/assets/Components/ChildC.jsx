import { useContext } from "react";
import { data, data2 } from "../../App";

let ChildC = () => {
    let name=useContext(data)
    let age=useContext(data2)
  return (
    <>
 
                
        <h1>My Name Is {name} and my age is {age}</h1>
    
    </>
  );
};

export default ChildC;
