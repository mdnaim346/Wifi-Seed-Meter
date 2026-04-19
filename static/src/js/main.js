const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 700,
        title: "WiFi Speed Meter",
        autoHideMenuBar: true, // Hides the top menu for a cleaner look
        webPreferences: {
            nodeIntegration: false
        }
    });

    // Replace with your local or production Odoo URL
    win.loadURL('http://localhost:8069/web#action=speed_meter_dashboard');
}

app.whenReady().then(createWindow);