const {app,BrowserWindow,ipcMain} = require('electron')

const path = require('path')
const createWindow = () => {
    console.log(__dirname,'__dirname');
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            preload: path.join(__dirname,'preload.js'),
            contextIsolation:true
        }
    })

    win.loadFile('index.html')
    win.webContents.openDevTools()
}

app.whenReady().then(()=>{
  // 创建浏览器窗口之前创建一个名为ping的函数，以便后续再渲染进程中调用该函数并获取相应的数据
  ipcMain.handle('ping',()=> 'pong')
    createWindow()


  app.on('activate',()=>{ // 该事件只有mac OS下才有用
    // 如果没有打开浏览器窗口则创建一个
    if(BrowserWindow.getAllWindows().length===0) createWindow()
  })
})
    // 关闭所有窗口则退出应用
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
      })
