import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import ViewLeads from './pages/ViewLeads'

type Page = 'dashboard' | 'leads'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Smart Popup</span>
          </div>
          <nav className="nav">
            <button
              className={`nav-btn ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentPage('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`nav-btn ${currentPage === 'leads' ? 'active' : ''}`}
              onClick={() => setCurrentPage('leads')}
            >
              Leads
            </button>
          </nav>
        </div>
      </header>
      <main className="app-main">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'leads' && <ViewLeads />}
      </main>
    </div>
  )
}
