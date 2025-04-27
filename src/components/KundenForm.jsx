import { useState } from 'react';
import { supabase } from '../services/supabaseClient';

export default function KundenForm() {
  const [kundenname, setKundenname] = useState('');
  const [salesmanager, setSalesmanager] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('kunden').insert([
      { kundenname, salesmanager }
    ]);

    if (error) {
      alert('Fehler beim Speichern: ' + error.message);
    } else {
      alert('Kunde erfolgreich gespeichert!');
      setKundenname('');
      setSalesmanager('');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h2>Kunde anlegen</h2>
      <div>
        <input
          type="text"
          placeholder="Kundenname"
          value={kundenname}
          onChange={(e) => setKundenname(e.target.value)}
          required
          style={{ marginBottom: '1rem', padding: '0.5rem' }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Sales Manager"
          value={salesmanager}
          onChange={(e) => setSalesmanager(e.target.value)}
          required
          style={{ marginBottom: '1rem', padding: '0.5rem' }}
        />
      </div>
      <button type="submit" disabled={loading} style={{ padding: '0.5rem 1rem' }}>
        {loading ? 'Speichern...' : 'Kunde speichern'}
      </button>
    </form>
  );
}

