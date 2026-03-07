import { useEffect, useState } from 'react'
import type { Lead } from '@/types'

export default function ViewLeads() {
  const [leads, setLeads] = useState<Lead[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('smart-popup-leads')
    if (stored) {
      try {
        setLeads(JSON.parse(stored))
      } catch {
        /* ignore */
      }
    }
  }, [])

  const exportCSV = () => {
    if (leads.length === 0) return
    const headers = ['Name', 'Phone', 'Email', 'Page URL', 'Summary', 'Date']
    const rows = leads.map(l => [
      l.name,
      l.phone,
      l.email,
      l.pageUrl,
      `"${l.summary.replace(/"/g, '""')}"`,
      new Date(l.timestamp).toLocaleDateString()
    ])
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `smart-popup-leads-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const clearLeads = () => {
    if (confirm('Are you sure you want to delete all leads?')) {
      localStorage.removeItem('smart-popup-leads')
      setLeads([])
    }
  }

  if (leads.length === 0) {
    return (
      <div className="leads-page">
        <div className="leads-header">
          <h2 className="section-title">📊 Collected Leads</h2>
        </div>
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <div className="empty-title">No leads yet</div>
          <p>
            Leads will appear here once visitors interact with your popup
            widget.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="leads-page">
      <div className="leads-header">
        <div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            📊 Collected Leads
          </h2>
          <span className="leads-count">
            {leads.length} lead{leads.length > 1 ? 's' : ''}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary btn-sm" onClick={exportCSV}>
            📥 Export CSV
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={clearLeads}
            style={{ color: 'var(--danger)' }}
          >
            🗑 Clear All
          </button>
        </div>
      </div>

      <div className="leads-table-wrap">
        <table className="leads-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Page</th>
              <th>Summary</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map(lead => (
              <tr key={lead.id}>
                <td>
                  <strong>{lead.name}</strong>
                </td>
                <td>{lead.phone}</td>
                <td>{lead.email || '—'}</td>
                <td>
                  <span className="badge">
                    {new URL(lead.pageUrl).pathname}
                  </span>
                </td>
                <td>
                  <div className="lead-summary" title={lead.summary}>
                    {lead.summary}
                  </div>
                </td>
                <td>
                  <div className="lead-time">
                    {new Date(lead.timestamp).toLocaleString()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
