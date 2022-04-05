import React, { useState, useEffect } from 'react'
import { Header } from '.'


function Layout( {children} ) {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout