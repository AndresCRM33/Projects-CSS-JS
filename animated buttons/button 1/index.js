let btn = document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mousemove", (e) =>{
        let x = e.offsetX; // almacena coordenadas x
        let y = e.offsetY; // almacena coordenadas y
        let botonWidth = btn.clientWidth; // ancho del botón
        let botonHeight = btn.clientHeight; // alto del botón
        let transX = (x - botonWidth/2);
        let transY = (y - botonHeight/2);
        let rotation

        if(transX > 10){
            rotation = -5
        }else if(transX > 0){
            rotation = 0
        }else{
            rotation = 5
        }
        btn.style.transform = `translateX(${transX}px) translateY(${transY}px) rotate(${rotation}deg)`

        let mx = e.pageX - btn.offsetLeft;
        let my = e.pageY - btn.offsetTop;

        btn.style.setProperty("--x", mx + "px")
        btn.style.setProperty("--y", my + "px")
        
    })
    btn.addEventListener("mouseout", (e) => {
        btn.style.transform = ""
    })

})
