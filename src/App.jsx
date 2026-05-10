import { useState } from 'react'

import { blogPosts } from './data/app_data'

import AppForm from './components/AppForm'
import PostsList from './components/PostsList'


function App() {
  const [posts, setPosts]=useState(blogPosts)
  
  

  return (
    <>
      <h1>Add blog post:</h1>
      <AppForm posts={posts} setPosts={setPosts}  />
      <PostsList posts={posts} setPosts={setPosts} />
    </>
  )
}

export default App
