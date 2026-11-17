import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery'

const slides = [
  {
    src: '/home-slide-1.jpeg',
    tag: 'Melhores ofertas personalizadas',
    title: 'Queima de stoque Nike 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/products',
  },
  {
    src: '/home-slide-2.jpeg',
    tag: 'Lançamento exclusivo',
    title: 'Nova Coleção Adidas ⚡',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/products',
  },
  {
    src: '/home-slide-3.jpeg',
    tag: 'Oferta especial',
    title: 'Air Jordan Edição Limitada 🏀',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/products',
  },
]

function App() {
  return (
    <>
      <Header />
      <main>
        <Gallery
          images={slides}
          width="1440"
          height="681"
        />
      </main>
      <Footer />
    </>
  )
}

export default App