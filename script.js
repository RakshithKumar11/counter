const add = (function(){
    let counter = 0;
    function increment(){
        counter +=1;
        if(counter == 7){
            document.getElementById('thala').innerHTML = "Thala for a reason";
            var music = document.getElementById('sound');
            music.play();
        }
        else{
            document.getElementById('thala').innerHTML = "";
        }
        return counter;
    }
   
   return increment;
   
})();

function myFunction(){
    document.getElementById('count').innerHTML = add();
}