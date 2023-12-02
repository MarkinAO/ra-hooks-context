import './App.css';
import { useState } from 'react';
import SelectTask from './components/selectTask/SelectTask';
import UseEffect from './components/use-effect/List';
import JsonFetch from './components/useJsonFetch/JsonFetck';
import Authentication from './components/authentication/Authentication';

function App() {
  let [ curTask, setCurTask ] = useState('USEEFFECT');
  const tasks = [
    { taskName: 'USEEFFECT', solving: <UseEffect key={'USEEFFECT'} /> },
    { taskName: 'JSONFETCH', solving: <JsonFetch key={'JSONFETCH'} /> },
    { taskName: 'AUTHENTICATION', solving: <Authentication key={'AUTHENTICATION'} /> }
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task: string) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App
