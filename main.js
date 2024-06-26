// let i = prompt("ism yoz")
// let i2 = prompt("son yoz")

// for(let i = 10; i >= 1; i++) {
//     console.log(i)
// }

let array = ["Bekzod", "akbar", "Sabina", "Munisa", "Muhammadaziz", "Ibrat", "Jovoh", "Asad", "ibratgavno", "Islon", "Juratapa"]
let color = ["red", "green", "yellow", "blue", "magenta", "cyan", "pink", "orange", "violet", "aqua", "black"]
let body = document.querySelector('body')

for (let i = 0; i < array.length; i++) {
    let p = document.createElement('p')
    p.innerText = array[i]
    let random = Math.ceil(Math.random() * array.length)
    console.log(random)
    p.style.color = color[random]
    body.append(p)
}
