const add = (function(){
    let counter = 0;
    function increment(){
        counter +=1;
        return counter;
    }
   
   return increment;
   
})();

function myFunction(){
    document.getElementById('count').innerHTML = add();
}