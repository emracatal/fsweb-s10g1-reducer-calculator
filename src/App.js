import React, { useReducer, useState } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  ADD_MEMORY,
  RECALL_MEMORY,
  CLEAR_MEMORY,
} from "./actions";
import { clearDisplay } from "./actions";

function App() {
  //dispatch kargocu
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch({ type: ADD_MEMORY })}
              />
              <CalcButton
                value={"MR"}
                onClick={() => dispatch({ type: RECALL_MEMORY })}
              />
              <CalcButton
                value={"MC"}
                onClick={() => dispatch({ type: CLEAR_MEMORY })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
              <CalcButton
                value={2}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
              <CalcButton
                value={3}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
              <CalcButton
                value={5}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
              <CalcButton
                value={6}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
              <CalcButton
                value={8}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
              <CalcButton
                value={9}
                onClick={(e) =>
                  dispatch({ type: APPLY_NUMBER, payload: e.target.value })
                }
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
              />
              <CalcButton
                value={"*"}
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
              />
              <CalcButton
                value={"-"}
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={(e) => dispatch(clearDisplay())}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
