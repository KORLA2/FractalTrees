let can = document.getElementById('can')
let ctx = can.getContext('2d');
can.width = window.innerWidth;
can.height = window.innerHeight
let fun = (x, y, h, len, ang) => {

    ctx.save();
    if (len < 10)

    {
        ctx.beginPath()
        ctx.restore()
        return;
    }
    ctx.translate(x, y);
    ctx.rotate(ang * Math.PI / 180)
    ctx.moveTo(0, 0)
    ctx.lineTo(0, -len)
    ctx.lineWidth=2;
    ctx.strokeStyle = `hsl(${h},100%,50%)`
    ctx.stroke()

    fun(0, -len, h+10, len * 0.8, ang + 15)
    fun(0, -len, h+20, len * 0.8, ang - 15)
    ctx.restore()
}
let h=Math.random()*360;
let animation=()=>{
ctx.clearRect(0,0,can.width,can.height)
fun(can.width / 2, can.height - 80, h, 120, 1)
h+=20
requestAnimationFrame(animation)

}
animation();