const { app, globalShortcut, Tray, BrowserWindow } = require('electron');
const path = require('path');

let tray = null;
let settingsWindow = null;

function createTray() {
  tray = new Tray(path.join(__dirname, 'assets/icon.png'));
  tray.on('click', function (event) {
    toggleSettings();
  });
}

function toggleSettings(){
  if (settingsWindow) {
    settingsWindow.close();
    settingsWindow = null;
  } else {
    settingsWindow = new BrowserWindow({
      width: 400,
      height: 600,
      show: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    settingsWindow.loadFile(path.join(__dirname, 'settings.html'));
    settingsWindow.on('closed', function () {
      settingsWindow = null;
    });
    settingsWindow.once('ready-to-show', () => {
      settingsWindow.show();
    });
  }
}

app.on('ready', () => {
  createTray();
  globalShortcut.register('Option+W', () => {
    toggleSettings();
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (tray === null) {
    createTray();
  }
});