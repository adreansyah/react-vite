import { useEffect, useState } from "react"
import Layout from "./layout"
import axios from "axios"



const App = () => {
  const [data, setdata] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setdata(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log('DEBUG FUNCTION APP')

  useEffect(() => {
    fetchApi();
  }, [])

  console.log(data);

  return (<Layout />)
}

export default App
