import * as React from 'react';
import { AppNavigator } from './routes/NavigateStart';

function App() {
  // IF logged in 
  //    if the account is Patient
  //        go to the Patient route
  //    else if the acc is CT
  //        go to Caretaker Route
  // else new user navigater 
  return <AppNavigator />;
}

export default App;