import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { fetchUser } from "./redux/actions";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from "./components/Header";

//styles
import './App.css';

function App( ) {
  const [ user, setUser ] = useState();
  const dispatch = useDispatch();

  useEffect( () => {
    setUser( dispatch(fetchUser()) );
  }, [ dispatch ]);

  return (
      <div className="App">
        <BrowserRouter>
            <Header />
              <Routes>
                <Route path='/' element={<div> <TodoForm /> <TodoList /> </div>} />
              </Routes>

        </BrowserRouter>
      </div>
  );
}

export default connect(null, { fetchUser })(App);

