import { useEffect } from "react";

export default function FunctionDisplay() {
  //* Component Did Mount
  //* useEffect(() => {}, [])
  useEffect(() => {
    console.log("FunctionCounter se montó al DOM");
  }, []);

  //* Component Will Unmount
  //* useEffect(() => () => {}, [])
  useEffect(
    () => () => {
      console.log("FunctionCounter se desmontará del DOM");
    },
    []
  );

  return (
    <div style={{ backgroundColor: "grey" }}>
      <h3>Function Display</h3>
    </div>
  );
}
