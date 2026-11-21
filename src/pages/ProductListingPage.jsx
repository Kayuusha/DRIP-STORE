import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './Layout';
import Section from '../components/Section/Section';
import ProductListing from '../components/ProductListing/ProductListing';
import FilterGroup from '../components/FilterGroup/FilterGroup';
import './ProductListingPage.css';

const produtosIniciais = [
  { id: 1, name: 'K-Swiss V8 - Masculino', category: 'Tênis', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100, badge: '30% OFF', brand: 'K-Swiss', filterCategory: 'Esporte e lazer' },
  { id: 2, name: 'Nike Air Max 90', category: 'Tênis', image: '/product-thumb-2.jpeg', price: 320, priceDiscount: 249.9, badge: '30% OFF', brand: 'Nike', filterCategory: 'Casual' },
  { id: 3, name: 'Adidas Ultraboost', category: 'Tênis', image: '/product-thumb-3.jpeg', price: 450, brand: 'Adidas', filterCategory: 'Corrida' },
  { id: 4, name: 'Puma Suede Classic', category: 'Tênis', image: '/product-thumb-4.jpeg', price: 280, priceDiscount: 199.9, brand: 'Puma', filterCategory: 'Casual' },
  { id: 5, name: 'Vans Old Skool', category: 'Tênis', image: '/product-thumb-5.jpeg', price: 299.9, brand: 'Vans', filterCategory: 'Casual' },
  { id: 6, name: 'Nike Revolution 6', category: 'Tênis', image: '/produc-image-1.jpeg', price: 350, priceDiscount: 279.9, brand: 'Nike', filterCategory: 'Corrida' },
  { id: 7, name: 'Asics Gel-Kayano', category: 'Tênis', image: '/produc-image-2.jpeg', price: 499.9, brand: 'Asics', filterCategory: 'Corrida' },
  { id: 8, name: 'New Balance 574', category: 'Tênis', image: '/produc-image-3.jpeg', price: 390, priceDiscount: 310, brand: 'New Balance', filterCategory: 'Casual' },
];

function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState('menor');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filterText = (searchParams.get('filter') || '').toLowerCase();

  function toggleBrand(brand) {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((item) => item !== brand) : [...prev, brand]
    );
  }

  let produtosFiltrados = produtosIniciais.filter((p) =>
    p.name.toLowerCase().includes(filterText)
  );

  if (selectedBrands.length > 0) {
    produtosFiltrados = produtosFiltrados.filter((p) =>
      selectedBrands.includes(p.brand)
    );
  }

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    const precoA = a.priceDiscount || a.price;
    const precoB = b.priceDiscount || b.price;
    return order === 'menor' ? precoA - precoB : precoB - precoA;
  });

  return (
    <Layout>
      <div className="listing-page">
        <aside className="listing-sidebar">
          <div className="sort-box">
            <label htmlFor="sort-select">Ordenar por</label>
            <select
              id="sort-select"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </div>

          <div className="filter-box">
            <h3>Filtrar por</h3>
            <hr />

            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: 'Nike', value: 'Nike' },
                { text: 'Adidas', value: 'Adidas' },
                { text: 'K-Swiss', value: 'K-Swiss' },
                { text: 'Puma', value: 'Puma' },
              ]}
              onChange={toggleBrand}
            />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: 'Esporte e lazer' },
                { text: 'Casual' },
                { text: 'Utilitário' },
                { text: 'Corrida' },
              ]}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: 'Masculino' },
                { text: 'Feminino' },
                { text: 'Unissex' },
              ]}
            />

            <FilterGroup
              title="Estado"
              inputType="radio"
              name="estado"
              options={[
                { text: 'Novo', value: 'novo' },
                { text: 'Usado', value: 'usado' },
              ]}
            />
          </div>
        </aside>

        <div className="listing-content">
          <Section
            title={`${produtosOrdenados.length} produtos encontrados`}
            titleAlign="left"
          >
            <ProductListing products={produtosOrdenados} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListingPage;
