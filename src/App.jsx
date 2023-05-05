import './App.css'
import {Nav,Hero,InputForm,BottomSection,Footer} from "./components"
import Advanced from './components/Advanced/Advanced'
function App() {

  return (
    <div className="app">
      <Nav/>
      <Hero/>
      <InputForm/>
      <Advanced/>
      {/* <BottomSection/> */}
      <Footer/>
 
    </div>
  )
}

export default App
