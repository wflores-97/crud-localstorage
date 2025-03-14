import FormAddSuplier from './components/FormAddSupplier'
import TableSuppliers from "./components/TableSuppliers";
import Header from "./components/Header";

function App() {
  return (
    <div className="container bg-dark">
      <div className="components">
        <Header />
        <FormAddSuplier />
        <TableSuppliers />
      </div>
    </div>
  );
}

export default App;
