
/**
 * 把p中可枚举的属性复制到o中，并返回o
 * 如果o和p 都含有同名属性，则覆盖o中属性
 */

 function extend(o,p){
     for(var prop in p){
         o[prop] = p[prop];
     }
     return o;
 }

 /**
 * 把p中可枚举的属性复制到o中，并返回o
 * 如果o和p 都含有同名属性，o属性不影响
 */

 function merge(o,p){
     for(var prop in p){
         if(o.hasOwnProperty(prop)) continue;
         o[prop] = p[prop];
     }
     return o;
 }

 /**
  * 
  * 如果o中，在p中没有同名属性删除它 
  * 
  */
 function restrict(o,p){
    for(var prog in o)
    {
        if(!(prog in p))
           delete o[prog];
    }
    return o;
 }
 
 /**
  * 如果o中，在p中同名属性删除它
  */

  function subtract(o,p){
      for(var prop in o){
          if(prop in p)
            delete o[prop];
      }
      return o;
  }

  /**
   * 返回一个新对象，同时拥有两个对象的属性，同名p覆盖
   */

function union(o,p){
    return(extend(extend({},o),p));
}

/**
 * 返回新对象，拥有o、p同时出现的对象
 */

 function intersection(o,p){
     return restrict(extend({},o),p);
 }

 /**
  * 返回一个数组包含o所有可枚举的自有属性
  */

  function keys(o){
    if(typeof o !== "object") throw TypeError();
    var result = [];
    for (var prop in o){
        if(o.hasOwnProperty(prop))
          result.push(prop);
    }
    return result;

  }


