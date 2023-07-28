import { Profile } from 'pages'
import customers from 'data/customers.json'

const App = () => {
  return (
    <Profile customer={ customers[0] } />
  );
}

export default App;
