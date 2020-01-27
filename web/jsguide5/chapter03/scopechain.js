
var s1 = 'global';

function fn(){
    console.log(s1);
}

function fn1(){
    var s1 = "local";
    fn();
}

fn1();
