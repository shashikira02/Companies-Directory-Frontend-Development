import Body from './components/Body'
import { CompaniesProvider } from './contexts/companies/CompaniesProvider';

function App() {
  return (
    <CompaniesProvider>
    <Body />
    </CompaniesProvider>
  );
}

export default App;
