import React from 'react'
import Link from 'gatsby-link'

const SongsPage = () => (
  <div>
    <Link to="/">Home</Link>
    <h1>Songs</h1>
    <ul>
      <li>
        <Link to="/songs/all-we-got">All We Got</Link>
      </li>
      <li>
        <Link to="/songs/blessings">Blessings</Link>
      </li>
      <li>
        <Link to="/songs/same-drugs">Same Drugs</Link>
      </li>
      <li>
        <Link to="/songs/finish-line-drown">Finish Line / Drown</Link>
      </li>
    </ul>



  </div>
)

export default SongsPage
