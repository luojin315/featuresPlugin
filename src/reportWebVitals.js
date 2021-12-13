// 博客说明：https://note.xiexuefeng.cc/post/about-web-vitals/
// git:https://github.com/GoogleChrome/web-vitals

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getLCP(onPerfEntry); // 最大内容渲染
      getFCP(onPerfEntry); // 第一次内容绘制
      getCLS(onPerfEntry); // 首屏页面渲染过程中所有元素结点相对原始位置所发生的位置偏移累积量
      getFID(onPerfEntry); // 用户交互触发的事件到主线程接收事件之间的延迟
      getTTFB(onPerfEntry); // 浏览器从开始加载网页内容到接收到第一个字节的网页内容之间的耗时
    });
  }
};

export default reportWebVitals;
