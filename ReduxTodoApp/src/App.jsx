import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/todoItems";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux";
import { store } from "./App/store";



function App() {
  return (
    <Provider store={store}>
      <div className="bg-secondary" style={{ height: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className=" d-flex flex-column align-items-center mt-5">
              <div className=" mb-2">
                <h1 className="text-dark">Redux Todo App</h1>
              </div>
            {/* Add New Todo */}

              <div className="col-12 col-sm-6 col-md-8 col-lg-6 colx-6 mb-4">
                  <AddTodo/>
              </div>
              <div className="col-12 col-sm-6 col-md-8 col-lg-6 colx-6">
                  <TodoItems />

              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider >
  );
}

export default App;
