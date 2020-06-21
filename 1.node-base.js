// console.log(this === global)
// console.log(this === module.exports)
~function() {
  // console.log(this)
  // console.log(Object.keys(this))
}()
// global中的属性 叫全局属性 module.exports require __dirname __filename 叫全局对象
// process 进程 开启很多歌线程
// Buffer 缓存区 读取文件 内存中的数据都是二进制数据 数据16进制
// clearInterval setInterval
// clearTimeout setTimeout
// clearImmediate setImmediate 宏任务

// 命令 window的目录 mac的目录不一样的
// window => win#@
// mac => darwin
// console.log(process.platform)
// argv 代表用户传递的参数 默认前俩个参数 没有实际意义
// 执行node node + 文件名执行
// 只能通过 命令 + 文件名 后面是参数 process.argv.slice(2)
// node 1.node-base.js --port 3000 --config xxx
// [ '--port', '3000', '--config', 'xxx' ] = { port: 3000, config: xxx }
// console.log(process.argv.slice(2))
let config = process.argv.slice(2).reduce((memo, current, index, array) => {
  if (current.includes('--')) {
    memo[current.slice(2)] = array[index + 1]
  }
  return memo
}, {})
// console.log(config)

// commander 命令行的管家 帮你提供 --help, 必须先安装
// 解析用户的参数 默认提供--help
const program = require('commander')
// node 1.node-base.js --version
program
  .option('-p, --port <val>', 'set port')
  .version('1.0.0')
  .parse(process.argv)

console.log(program.port)