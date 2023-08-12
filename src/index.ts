import { app, BrowserWindow, MenuItem, Menu } from 'electron';

function createWindow () {
  const options: Electron.BrowserWindowConstructorOptions = {
    movable: false,
    minimizable: false,
    resizable: false,
    titleBarStyle: 'hidden',  // タイトルバーをダブルクリックすると最大化が解除されるため隠しておく
    backgroundColor: "#000",
  }
  const win = new BrowserWindow(options);
  win.maximize();
  win.loadFile("src/index.html");
}

app.on("ready", function() {
  createWindow();
});

app.on("browser-window-created", function(event, win) {
  const ctxMenu = new Menu();
  ctxMenu.append(new MenuItem({label: "Exit", click: function(){win.close();}}));
  win.webContents.on("context-menu", function(e, params) {
    ctxMenu.popup({window: win});  // とりあえず動くが要調査
  })
})
