import { useSelector, useDispatch } from "react-redux"; //!tools that lets me use actions that ive made and dispatch them to the reducers so it can do it's thing
import { increment, decrement, reset } from "./actions/countActions";
// import { signIn, signOut, toggleSignIn } from "./actions/authActions";
import { toggleSignIn } from "./actions/authActions";

function App() {
  const count = useSelector((state) => state.counterReducer);
  const isUserLoggedIn = useSelector((state) => state.loginReducer);
  //! see combined reducers which is a massive state containing all of my reducers and their relative states

  const dispatch = useDispatch();

  //!
  return (
    <div className="App">
      <h1>Count is at: {count}</h1>
      <div>
        <button onclick={() => dispatch(increment())}>+</button>
        <button onclick={() => dispatch(reset())}>reset</button>
        <button onclick={() => dispatch(decrement())}>-</button>
      </div>

      {isUserLoggedIn ? <div> "Here is the top secret information"</div> : ""}
      <button
        onClick={() => {
          dispatch(toggleSignIn());
        }}
      >
        {isUserLoggedIn ? "Sign out" : "sign in"}
      </button>
    </div>
  );
}

export default App;
