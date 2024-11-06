/**
 * 预加载脚本--可以同时使用node 和 操作dom
 */

// 直接操作dom
// window.addEventListener('DOMContentLoaded',()=>{
//     const replaceText = (selector,text)=>{
//         const element = document.getElementById(selector)
//         if(element){
//             element.innerText = text
//         }
//     }
//     for(const type of ['chrome','node','electron']){
//         replaceText(`${type}-version`,process.versions[type])
//     }
// })


const { contextBridge,ipcRenderer } = require('electron')

// 向全局暴露一个version变量 之后可以在全局直接使用version来使用这个变量
contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
    // 除函数之外，我们也可以暴露变量
  })