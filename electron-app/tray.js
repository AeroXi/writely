const { app, Menu, Tray } = require('electron');
const path = require('path');

let tray = null;

app.on('ready', () => {
  tray = new Tray(path.join(__dirname, 'assets/icon.png'));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Settings', 
      click: () => {
        require('./main.js').openSettingsWindow();
      }
    },
    {
      label: 'Quit', 
      click: () => {
        app.quit();
      }
    }
  ]);
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);
});