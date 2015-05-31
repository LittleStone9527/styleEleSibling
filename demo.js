/**
 * Created by Administrator on 2015/5/28 0028.
 */
//思路：找出紧跟在指定元素后面的那个元素，并且给该元素添加样式
function setSiblingStyle(tag,Tclass){
    if(!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tag);
    var nextEle;
    for(var i=0; i<elems.length; i++){
        //得到的下一个元素节点赋值给nextEle；接着改变样式
        nextEle = nextElementSiblings(elems[i].nextSibling);
        
        // 追加样式
        addClass(nextEle, Tclass);
        console.log(nextEle);
    }
}
//寻找先一个元素节点的函数，把一个元素的下一个节点（nextSibing）作为参数传给该函数，经过筛选返回元素节点
function nextElementSiblings(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return nextElementSiblings(node.nextSibling);
    }
    return null;
}

function addClass(elem,value){
    if(!elem.className){
        elem.className = value;
    }
    else{
        newClassname = elem.className;
        newClassname += " "; 
        newClassname += value;
        elem.className = newClassname;
    }
}

//window.onload=setSiblingStyle;
function addonloadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldonload();
            window.onload = func;
        }
    }
}
addonloadEvent(function(){
    setSiblingStyle("h1","style2");
});







