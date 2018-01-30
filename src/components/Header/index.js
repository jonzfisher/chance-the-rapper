import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <h1 style={{ margin: '2rem 0' }}>
        <Link
          to="/"
          style={{
            color: '#FF9286',
            textDecoration: 'none',
            fontStyle: 'italic',
            textAlign: 'center',
            width: '100%',
            display: 'block',
          }}
        > CHANCE
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
