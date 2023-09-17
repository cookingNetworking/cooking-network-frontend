import Login from "./Organisms/Login";
import SignUp from "./Organisms/SignUp";

const App = () => {
  return (
    <div className="app h-full w-full flex items-center justify-center bg-gradient-to-r from-primary to-secondaryVar">
      <Login />
      <SignUp />
    </div>
  );
};

export default App;
