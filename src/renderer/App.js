import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import NotificationForm from "./NotificationForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotificationForm />} />
      </Routes>
    </Router>
  );
}
