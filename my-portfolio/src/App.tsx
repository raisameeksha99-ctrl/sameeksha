import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import ProjectPage from '@/pages/ProjectPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        {/* Catch all redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}
