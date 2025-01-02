import React from 'react'
import Sidebar from '@/components/shared/sidebar'
import MobileNav from '@/components/shared/MobileNav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* mobile side bar */}
      <MobileNav />
      
      {/* Main content */}
      <div className="root-container flex-1">
        <div className="wrapper p-4">
          {children}
        </div>
      </div> 
    </main>
  )
}

export default Layout
