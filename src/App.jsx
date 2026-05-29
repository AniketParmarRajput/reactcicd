import "./App.css";
import useCustomeinc from "./Component/Custom Hooks/increment";

function App() {

  const { othcount, inc , dec} =
    useCustomeinc();

  return (
    <>
      <p className="text-white">
        {othcount}
      </p>

      <button onClick={dec}>
       dec
      </button>
    </>
  );
}

export default App;
