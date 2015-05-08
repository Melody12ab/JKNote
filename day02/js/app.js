(function () {    //对数据进行封装
    var n = "12";
    function People(name) {
        this._name = name;
    }

    People.prototype.say = function () {
        alert("hello " + this._name + n);
    }
    window.People = People;//以给外部使用
}());


(function () {
    function Student(name) {
        this._name = name;
    }
    Student.prototype = new People();
    /*如果要覆盖父类中的方法*/
    var superSay = Student.prototype.say;
    Student.prototype.say = function () {
        superSay.call(this);
        alert("Stu-hello " + this._name);
    }

    window.Student=Student;

}());

var s = new Student("melody");
s.say();


//面向对象方法二
(function(){
    var n="侬好";
    function Person(name){
        var _this={}
        _this._name=name;
        _this.sayhello=function(){
            alert("P-Hello "+_this._name+n);
        }
        return _this;
    }
    window.Person=Person;
}());
(function(){
    function Teacher(name){
        var _this=Person(name);
        _this
        var superSay=_this.sayhello;
        _this.sayhello=function(){//覆盖父类方法
            superSay.call(_this);
            alert("t-hello "+_this._name);
        }
        return _this;
    }
    window.Teacher=Teacher;
}());

var t=Teacher("melody");
t.sayhello();