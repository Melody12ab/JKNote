/**
 * Created by Administrator on 2015/5/17.
 */
function Cat(name,color){
    this.name=name;
    this.color=color;
}
Cat.prototype.type="猫科动物";//将不变的封装在原型中
Cat.prototype.eat=function(){alert("吃老鼠")};

var cat1=new Cat("大猫","白色");
console.log(cat1.type);
console.log(cat1.color);
cat1.eat();

//继承函数的封装
function extend(Child, Parent) {
    var F = function(){};//创建一个空对象 几乎不占内存
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;  //给子对象一个属性让其指向父对象，可以直接调用父对象的方法
}

//快速排序
var quickSort = function(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};