import { useState } from 'react'

import { blogPosts } from './data/app_data'

import AppForm from './components/AppForm'


function App() {
  

  return (
    <>
      <h1>Add blog post</h1>
      <AppForm />
    </>
  )
}

export default App
