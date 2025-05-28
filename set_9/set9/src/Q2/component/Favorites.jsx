import React, { useContext } from 'react'
import { BookContext } from '../context/Bookcontext'

const Favorites = () => {
  const { favorites, setFavorites } = useContext(BookContext);

  const handleRemoveFromFavorites = (bookToRemove) => {
    setFavorites(favorites.filter(book => book.id !== bookToRemove.id));
  }

  return (
    <div>
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        marginBottom: '20px',
        borderBottom: '1px solid #dee2e6',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          margin: 0,
          color: '#333',
          fontSize: '2rem'
        }}>My Favorite Books</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>
          {favorites.length} {favorites.length === 1 ? 'book' : 'books'} in your collection
        </p>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', padding: '15px' }}>
        {favorites.map((book) => (
          <div key={book.id} style={{ 
            flexBasis: 'calc(20% - 12px)', 
            minWidth: '150px',
            textAlign: 'center',
            padding: '8px',
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            margin: '5px'
          }}>
            <img src={book.image} alt='book' style={{ maxWidth: '100%', height: '150px', objectFit: 'cover' }}/> 
            <h3 style={{ fontSize: '1rem', margin: '5px 0' }}>{book.title}</h3>
            <h4 style={{ fontSize: '0.9rem', margin: '5px 0' }}>{book.author}</h4>
            <h5 style={{ fontSize: '0.8rem', margin: '5px 0' }}>${book.price}</h5>
            <button style={{
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} onClick={() => handleRemoveFromFavorites(book)}>
              Remove from favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
