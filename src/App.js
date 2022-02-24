import './App.css';
import { useDispatch } from "react-redux";
import { fetchUser } from "./actions/users";
import { useEffect, useState } from 'react';
import TableView from './components/Table';
const App = () => {
  const [isLoading,setIsLoading] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUsers = () => {
      setIsLoading(true);
       dispatch(fetchUser());
      setIsLoading(false);
    };
    loadUsers();
  }, [dispatch]);
  return(
    
    <TableView></TableView>
  )
}

export default App;
