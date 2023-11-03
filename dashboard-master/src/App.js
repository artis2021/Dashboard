import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import useGrouping from './contexts/useGrouping';
import GroupByUser from './components/GroupByUser';
import GroupByStatus from './components/GroupByStatus';
import GroupByPriority from './components/GroupByPriority';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(()=>data.tickets);
      setUsers(()=>data.users);
    }
    fetchData();
  }
  , []);

  const {groupingId} = useGrouping();

  return (
    <div className="app">
      <Navbar />
      {
        groupingId === 0 ? (
          <GroupByStatus tickets={tickets} users={users} />) :
        groupingId === 1 ? (
          <GroupByUser tickets={tickets} users={users} />
        ) : (
          <GroupByPriority tickets={tickets} users={users} />
        )
      }
    </div>
  );
}

export default App;
