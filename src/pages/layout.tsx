import { Sidebar } from "@/components/sidebar"
import { Outlet } from "react-router-dom"


export const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <div className="sm:ml-14 p-4">
        <Outlet />
      </div>
      
    </div>
  )
}
