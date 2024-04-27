import { PublicRoute } from "./config/index.route";
import Footer from "./layout/layout.footer";
import { Header } from "./layout/layout.header";
const App = () => {
  return (
    <div>
      <Header />
      <PublicRoute />
      <Footer />
    </div>
  )
}

export default App

