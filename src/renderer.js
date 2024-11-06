/**
 * 运行在浏览器中的js脚本
 */

const test = document.querySelector('#test')
console.log(versions,'asdasdasdsadas');
test.innerHTML = `暴露出来的node版本${versions.node()}---暴露出来的electron版本${versions.electron()}-----暴露出来的chrome版本${versions.chrome()}`


const getMainProcessMessage = async () => {
    let ping = await versions.ping()
    console.log(ping,'主进程中的数据');
}
getMainProcessMessage()