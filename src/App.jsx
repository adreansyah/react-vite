import { PublicRoute } from "./config/index.route";
import Footer from "./layout/layout.footer";
import { Header } from "./layout/layout.header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const x = {
    test: 1
  }
  return (
    <div>
      <ToastContainer />
      <Header />
      <PublicRoute data={x} />
      <Footer />
    </div>
  )
}

export default App

