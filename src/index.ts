import { app, BrowserWindow } from 'electron';

function createWindow () {
  const options: Electron.BrowserWindowConstructorOptions = {
    movable: false,
    minimizable: false,
    resizable: false,
    titleBarStyle: 'hidden',  // タイトルバーをダブルクリックすると最大化が解除されるため隠しておく
    backgroundColor: "#000",
    webPreferences: {
      nodeIntegration: true
    }
  }
  const win = new BrowserWindow(options);
  win.maximize();
}

app.whenReady().then(createWindow);
