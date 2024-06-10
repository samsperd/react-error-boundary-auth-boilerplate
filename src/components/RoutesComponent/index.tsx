import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import Login from '../../pages/Auth/Login'
import Dashboard from '../../pages/Dashboard'
import Layout from '../Layout'
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import NotFound from '../../pages/NotFound'


const RoutesComponent = () => {
  return (
    <BrowserRouter>

      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          {/* <Route path={'/dashboard'} element={
              <RequireAuth fallbackPath='/login'>
                <Dashboard/>
              </RequireAuth>
            }/> */}
          <Route path='/login' element={<Login />}></Route>
          <Route element={<AuthOutlet fallbackPath='/login' />}>
              <Route path={'/dashboard'} element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound code="404"/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default RoutesComponent