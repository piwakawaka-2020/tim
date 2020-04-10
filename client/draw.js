
 export function draw(val) {

    if (document.readyState === 'complete') {
        let rot = val.rotation
        let length = val.length
        let times = val.times
    //console.log('hello')
    var c = document.getElementById("canv");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    
    
    var altrot = true
    var altrot2 = true
    var pos = [600, 600]
    for (let index = 0; index < times;  index++) {
       // pos[0] = pos[0] + rot/3
        //pos[1] = pos[1] + rot/4
        if (altrot == true) {
            if (altrot2 == true) {
                ctx.lineTo(pos[0] + length, pos[1])
                pos[0] = pos[0] + length
        
                
                
                ctx.lineTo(pos[0], pos[1] - length)
                pos[1] = pos[1] - length/rot
                
                ctx.stroke();
                altrot2 = false
                console.log(altrot2)
            } else {
                
                ctx.lineTo(pos[0] - length, pos[1])
                pos[0] = pos[0] - length
        
                
                
                ctx.lineTo(pos[0], pos[1] + length)
                pos[1] = pos[1] + length
                altrot = false
                altrot2 = true
                
                ctx.stroke();
            }
        } else if (altrot2 == true) {
            
            ctx.lineTo(pos[0] - length, pos[1])
            pos[0] = pos[0] - length
    
            altrot = false
            
            ctx.lineTo(pos[0], pos[1] + length)
            pos[1] = pos[1] + length/rot
        
            
            ctx.stroke();
            altrot2 = false
        } else {
            ctx.lineTo(pos[0] - length, pos[1])
            pos[0] = pos[0] - length/rot
    
            altrot = false
            
            ctx.lineTo(pos[0], pos[1] + length)
            pos[1] = pos[1] + length
            
            ctx.stroke();
            altrot2 = true
            altrot = true
        }
     

}}

}

export function clear() {
    var c = document.getElementById("canv");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1200, 1200);
}






//down = 10
//left = 10
//up = down * 1.1
//right = left * 1.1
//down = up * 1.1