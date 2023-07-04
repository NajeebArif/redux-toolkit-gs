import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { UserPage } from './features/users/UserPage'
import { UsersList } from './features/users/UsersList'
import { Navbar } from './app/Navbar'
import PostsList from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <LandingPageContent /> }
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPosts/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

const LandingPageContent = () => (
  <>
    <AddPostForm />
    <PostsList />
  </>
)

export default App
