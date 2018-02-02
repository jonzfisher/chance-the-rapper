import React from 'react'
import Link from 'gatsby-link'

import './songs.css'
import chance from './chance_profile.png'

const SongsPage = () => {
  return (
    <div style={{
      height: '100%',
    }}>
      <Link className="back_to_home" to="/">
        Home
      </Link>
      <h1 className="songs_header">Songs</h1>
      <ul className="songs_list">
        <li>
          <Link className="songs-link" to="/songs/all-we-got">All We Got</Link>
        </li>
        <li>
          <Link className="songs-link" to="/songs/blessings">Blessings</Link>
        </li>
        <li>
          <Link className="songs-link" to="/songs/same-drugs">Same Drugs</Link>
        </li>
        <li>
          <Link className="songs-link" to="/songs/finish-line-drown">Finish Line / Drown</Link>
        </li>
        <li>
          <Link className="songs-link" to="/songs/blessings-reprise">Blessings (Reprise)</Link>
        </li>
      </ul>
      <img src={ chance } style={{
        position: 'absolute',
        bottom: 0,
        margin: '0 0 0 8rem',
      }}/>
    </div>
  )
}

export default SongsPage
