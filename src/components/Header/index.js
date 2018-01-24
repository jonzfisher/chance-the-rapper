import React from 'react'
import Link from 'gatsby-link'
import album from './coloring-book.png'

const Header = () => (
  <div>
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#FF9286',
            textDecoration: 'none',
          }}
        >
          <img
            style = {{
              width: '100%',
            }}
            src={album} />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
