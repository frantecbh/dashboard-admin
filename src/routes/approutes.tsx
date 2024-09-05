import { Home } from '@/pages/home'
import { Layout } from '@/pages/layout'
import { Pedidos } from '@/pages/pedidos'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/pedidos' element={<Pedidos />} />
      </Route>
    </Routes>
  )
}
