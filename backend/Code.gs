/**
 * Tickets a la Isla — Google Apps Script backend
 *
 * Recibe un POST JSON desde la landing y lo agrega como fila
 * en la primera hoja de la planilla vinculada al script.
 *
 * Pasos:
 * 1. Crear una planilla de Google → Extensiones → Apps Script
 * 2. Pegar este código y guardar
 * 3. Implementar → Nueva implementación → Aplicación web
 *    - Ejecutar como: Yo
 *    - Acceso: Cualquier persona
 * 4. Copiar la URL de la aplicación web y pegarla en index.html
 */

const SHEET_NAME = 'Registros';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['nombre', 'email', 'instagram', 'fecha']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }

    sheet.appendRow([
      data.nombre || '',
      data.email || '',
      data.instagram || '',
      data.fecha || new Date().toISOString()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Tickets a la Isla — backend OK')
    .setMimeType(ContentService.MimeType.TEXT);
}
