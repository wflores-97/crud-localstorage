import FormAddSuplier from "./components/FormAddSupplier";
import TableSuppliers from "./components/TableSuppliers";
import ModalUpdateSupplier from "./components/ModalUpdateSupplier";
import Header from "./components/Header";

function App() {
  const target = "exampleModal";
  return (
    <div className="container bg-dark">
      <div className="components">
        <Header />
        <FormAddSuplier />
        <TableSuppliers />
        <ModalUpdateSupplier modalTarget={target} />
      </div>
    </div>
  );
}

export default App;
