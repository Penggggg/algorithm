### 习题地址

https://leetcode-cn.com/leetbook/detail/queue-stack/

### JS 性能

> 常见用数组来实现队列，并分别用 unshift/pop 来实现入队、出队

#### 性能盲点：unshift、shift

> unshift 是对于数组的首元素进行操作的，因此每 unshift 一个元素，都要把现有元素往后挪一个位置

而数组为了方便访问每个元素，每个单位的访问都是通过指针进行引用的

一旦现有元素位置进行改变，就需要数组对每个元素的指针进行重新计算

所以操作时数组头部的的 api，比操作尾部的 api 效率要慢很多
