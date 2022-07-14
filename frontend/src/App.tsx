import React from 'react';
import { RecoilRoot } from "recoil";
import { TasksList } from "./components/tasks-list";

function App() {
  return (
    <RecoilRoot>
      <TasksList />
    </RecoilRoot>
  );
}

export default App;
