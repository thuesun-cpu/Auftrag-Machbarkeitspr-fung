export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const {
    kunde_name,
    kunde_email,
    kunde_tel,
    kunde_rechnungsadresse,
    private_zwecke,
    ust0_voraussetzungen
  } = req.body || {};

  if (!kunde_name || !kunde_email || !kunde_tel || !kunde_rechnungsadresse) {
    return res.status(400).send('Pflichtfelder fehlen');
  }

  if (private_zwecke !== true) {
    return res.status(400).send('Private Nutzung nicht bestätigt');
  }

  if (ust0_voraussetzungen !== true) {
    return res.status(400).send('0% USt nicht bestätigt');
  }

  console.log('Neue Beauftragung:', {
    kunde_name,
    kunde_email,
    kunde_tel,
    kunde_rechnungsadresse,
    private_zwecke,
    ust0_voraussetzungen
  });

  return res.status(200).send('Beauftragung erfolgreich übermittelt.');
}
