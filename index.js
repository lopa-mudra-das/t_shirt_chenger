var arr=["img2.jpg","img3.jpg","img4.jpg","img5.webp","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg","img12.jpg"];
   var i=0;
   let play=true
   function displya() {
    var im= document.querySelector("img")
     im.src="./images/"+arr[i];
     i++;
     if(i==arr.length)//i==4
     {
      i=0;
     }
   }     
   function clk(){
    document.getElementById("ply").src="./images/circled-pause.png"
    setInterval(displya,1000)
   }
