//浏览器的javascript没有读取文件和进行文件操作的能力
//但是node的js具有相关的功能
//fs是file-system的简写，就是文件系统的意思
//在node中进行文件的读写操作，就必须引入fs核心模块

//fs核心模块提供了所有相关的api
//fs.readFile()用来读取文件
//使用require进行fs的加载
const fs=require('fs')
//读取文件
//第一个参数要读取的文件路径，第二个参数是回调函数
//如果读取失败，error就是错误对象，如果读取成功error就是null
//如果读取失败，data就是undefined，如果读取成功data就是返回的数据

const data = fs.readFileSync("/Users/dongzhihua/web3.0/eth-raise/sol/Raise.sol");

console.log(data.toString())
