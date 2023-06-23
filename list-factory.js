
export function LinkedList(){
    const list = {}
  
    function append(val){
      if(size()===0){ list.head = Node(val) }
      else{
        const lastElement = findNull(list.head)
        lastElement.next = Node(val);
      }
    }
  
    function prepend(val){
      if(size()===0){ list.head = Node(val) }
      else{
        const tempObj = list.head;
        list.head = Node(val,tempObj)
      }
    }
    
    function head(){
      if(size()>0){ return list.head }
      else return "No nodes in list" 
    }
  
    function tail(){ return findNull(list.head) }
  
    function findNull(obj){
      if(obj.next===null) return obj
      return findNull(obj.next)
    }
  
    function at(index, obj=list.head, acc=0){
      if(acc===index){ return obj ? obj : "Index doesn't exist"  }
      return at(index, obj.next, acc+1)
    }
  
    function pop(){
      const beforeLast = secondLast(list.head);
      beforeLast.next = null;
      function secondLast(obj){ return obj.next.next===null ? obj : secondLast(obj.next) }
  
    }
  
    function contains(val, obj=list.head){
      if(obj.value === val) return true
      else if(!obj.next) return false
      else return contains(val, obj.next)
    }
  
    function find(val, obj=list.head, acc=0){
      if(obj.value === val) return acc
      else if(!obj.next) return null
      else return find(val, obj.next, acc+1)
    }
  
    function size(obj=list.head, acc=1){
      if(!obj) return 0
      if(obj.next===null) return acc
      else return size(obj.next, acc+1)
    }
  
    function toString(obj=list.head, str=""){
      if(obj.next === null){
        str+=obj.value + " -> null";
        return str;
      }
      return toString(obj.next, str+= obj.value + " -> ")
    }
  
    function insertAt(val, index){
      if(index>size()){
        append(val)
        return
      } 
      else if(index===0){
        prepend(val);
        return
      }
      const prev = at(index-1);
      const next = prev.next;
      prev.next = Node(val, next)
    }
  
    function removeAt(index){
      const listSize = size()
      if(index===listSize){ pop() }
      else if(index>listSize) console.log("This list has a length of "  + listSize + ".\nPlease enter a smaller number");
      else if(index===0){
        if(list.head.next!==null){
          const valAfter = list.head.next;
          list.head = valAfter;
        }
        else delete list.head
      }
      else{
        const valBefore = at(index-1);
        const valAfter = valBefore.next.next
        valBefore.next = valAfter;
      }
    }
  
    function appendMultiple(arr){ for(let val of arr){append(val) } }

  return Object.assign({}, {append, prepend, appendMultiple, size, toString, head, tail, at, pop, contains, find, insertAt, removeAt})
  }
  
  function Node(value=null, next=null){ return { value, next } }
  

  
  