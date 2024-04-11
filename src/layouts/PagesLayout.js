import React from 'react'
import './PagesLayout.css'

const PagesLayout = ({ children, backgroundImage }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <>
      <main className='pagesLayout__main' style={backgroundStyle}>
        {children}
      </main>
    </>
  )
}

export default PagesLayout