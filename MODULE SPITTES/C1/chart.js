const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d')

class Chart{

    constructor(data){
        this.title = data.title
        this.data = data.data
    }

    getData(){
        return this.data
    }

}

let chart = new Chart({
    title: "Data Covid Jakarta Oktober",
    data: [
        {
            tanggal: 1,
            jumlah: 13,
        },
        {
            tanggal: 2,
            jumlah: 20,
        },
        {
            tanggal: 3,
            jumlah: 70,
        },
        {
            tanggal: 4,
            jumlah: 40,
        }, 
        {
            tanggal: 5,
            jumlah: 60,
        },
        {
            tanggal: 6,
            jumlah: 20,
        },
        {
            tanggal: 7,
            jumlah: 50,
        },
        {
            tanggal: 8,
            jumlah: 30,
        },
    ]
})



ctx.beginPath()
ctx.lineWidth = '2'
ctx.strokeStyle = 'black'
ctx.moveTo(50,40)
ctx.lineTo(50, 350)
ctx.lineTo(500, 350)
ctx.stroke()

const data = chart.getData()
const tanggal = data.map(item => item.tanggal)
const jumlah = data.reduce((acc, curr) => {
    if(!acc.includes(curr.jumlah)) {
        acc.push(curr.jumlah)
    }
    return acc
}, []).sort((a,b) => b - a)

for(let i = 0;i < tanggal.length;i++){
    ctx.fillText(tanggal[i], 60 * (i + 1), 370)
    ctx.fillRect(60 * (i + 1) + 1, 350, 3, 4)
}

for(let i = 0;i < jumlah.length;i++){
    ctx.fillText(jumlah[i], 30, 40 * (i + 1) + 40);
    ctx.fillRect(47, 40 * (i + 1) + 35, 3, 4)
}

ctx.fillText(chart.title, 250, 30)
ctx.font = "11px monospace"
ctx.fillText('Jumlah', 32, 35)
ctx.fillText('Tanggal', 500, 353)

ctx.beginPath()
ctx.lineWidth = '2'
ctx.strokeStyle = "red"
ctx.moveTo(60, 325)
ctx.lineTo(120,300)
ctx.lineTo(180, 80)
ctx.lineTo(240, 200)
ctx.lineTo(300, 120)
ctx.lineTo(360, 280)
ctx.lineTo(420, 170)
ctx.lineTo(480, 250)
ctx.stroke();

// segitiga
ctx.beginPath()
ctx.moveTo(115, 290)
ctx.lineTo(125, 310)
ctx.lineTo(105, 310)
ctx.lineTo(115, 290)
ctx.fillStyle = "green"
ctx.fill()

// persegi
ctx.fillStyle = "red"
ctx.fillRect(170,70,20,20);

// lingkaran
ctx.beginPath()
ctx.fillStyle = "blue"
ctx.arc(300, 120, 10, 0, 2 * Math.PI)
ctx.fill()

// lingkaran 2
ctx.beginPath()
ctx.fillStyle = "red"
ctx.arc(360, 275, 10, 0, 2 * Math.PI)
ctx.fill()

ctx.beginPath()
ctx.moveTo(410, 175)
ctx.lineTo(420, 155)
ctx.lineTo(430, 175)
ctx.lineTo(410, 175)
ctx.fillStyle = "blue"
ctx.fill()