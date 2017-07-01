这是用flex布局写的一个页面，里面的语法基本遵循了
<a href="https://github.com/ecomfe/spec/blob/master/html-style-guide.md">EFE HTML编码规范</a>和
<a href="https://github.com/ecomfe/spec/blob/master/css-style-guide.md#user-content-24-%E8%A1%8C%E9%95%BF%E5%BA%A6">
EFE CSS编码规范</a>
<br>
flex弹性布局是一种响应式的布局，通过写这个页面可以发现它的适配性还是不错的，实现起来也比较简单<br>
此代码按规范来写，感觉格式简洁美观，写代码不仅仅是把原型写出来那么简单，写的优美简洁才是重点，要加油


IFE-flex-text-1加了js，导航栏的下拉采用CSS来实现，轮播是左右移动的样式<br>
IFE-flex-text-2加了js，所有的动态效果都由js实现，导航栏的下拉，轮播的淡入淡出样式，Tab选项卡切换以及Select联动<br>
IFE-flex-text-3实现的功能如下：<br>
按照如下设计图及需求完成编码
<img src="https://striker.teambition.net/thumbnail/110u1f9c96ad08d9f710c2252bba7c2389ac/w/799/h/616">
<br>图1<br>
1. 黑色框和红色框均为参考线，非需要实现的边线。黑色框是表示浏览器窗口大小的一个大概示意。
2. 整个导航及banner和上一任务一致，可直接复用
3. 需要实现下方两个内容，左侧导航及右侧表格，表格单元格宽度自适应
4. 左侧导航的内容高度比浏览器的高度高，类似在图1的这种情况，左侧导航内部可以滚动，类似：http://echarts.baidu.com/examples.html
5. 右侧表格高度超过屏幕高度，滚动的时候，整页进行滚动。
<img src="https://striker.teambition.net/thumbnail/110u92d8a06a54cbc692f25ad6e42cbe5676/w/800/h/403">
<br>
6. 如图2，当浏览器整体滚动的时候，左侧导航会自适应增加高度，直至内容全部显示出来<br>
7. 当浏览器滚动到表格表头的Top超出浏览器时，出现一个固定在浏览器窗口顶部的表头，表头各单元格宽度与内容表格各单元格宽度一致。<br>
8. 不允许使用jQuery等组件或框架


