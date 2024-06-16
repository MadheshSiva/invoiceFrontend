import HomePage from "./components/HomePage"; 
import {BrowserRouter,Route, Routes} from "react-router-dom";
import InvoiceForm from "./components/InvoiceForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/invoiceform" element={<InvoiceForm/>} />
     </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
