// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maps from './Pages/Maps';
import Surat from './Pages/Surat';
import TambahWarga from './Pages/TambahWarga';
import TambahAnak from './Pages/TambahAnak';

const App = () => {
  return (
    <Router>
<Routes>
          <Route path="/" element={<Maps/>} />
          <Route path="/maps" element={<Maps/>} />
          <Route path="/surat" element={<Surat />} />
          <Route path="/tambah-warga" element={<TambahWarga />} />
          <Route path="/tambah-anak" element={<TambahAnak />} />
        </Routes>
    </Router>
  );
};

export default App;
