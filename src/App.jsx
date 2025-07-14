
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {


  return (
    <>
    <div className='p-6 max-w-6xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Welcome to the Shopping Cart</h1>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'><ProductList></ProductList></div>
        <Cart/>
      </div>
    
    </div>
    </>
  )
}

export default App
