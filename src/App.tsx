import './App.css'
import ContentGenerator from './components/ContentGenerator'
import DesignSuggestion from './components/DesignSuggestion'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className='bg-gray-100'>
      <Header />
      <ContentGenerator />
      <h2 className='text-center text-gray-700 text-2xl font-semibold mb-4'>Sugerencia de colores</h2>
      <DesignSuggestion suggestion='Alguna sugerencia aquí...'/>
      <Footer />
    </div>
  )
}

export default App
