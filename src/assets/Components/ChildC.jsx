import { data, data2 } from "../../App";

let ChildC = () => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            // <h1>My Name Is {name}</h1>
            <data2.Consumer>
              {(age) => {
                return (
                  <h1>
                    My Name Is {name} and my age is {age}
                  </h1>
                );
              }}
            </data2.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
};

export default ChildC;
