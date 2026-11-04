

// let main = document.querySelector('main')
// let btn = document.querySelector('button')

// btn.addEventListener('click',function(){
//     let div = document.createElement('div')
    
//     let x = Math.random()*100
//     let y = Math.random()*100
//     let r = Math.random()*360
//     let c1 = Math.floor(Math.random()*256)
//     let c2 = Math.floor(Math.random()*256)
//     let c3 = Math.floor(Math.random()*256)

//     div.style.height = '50px'
//     div.style.width = '50px'
//     div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     div.style.position = 'absolute'
//     div.style.left = x+'%'
//     div.style.top = y+'%'
//     div.style.rotate = r+'deg'
//     console.log(div);
    
//     main.appendChild(div)
// })


let main = document.querySelector('main')
let btn = document.querySelector('button')

let images = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=300',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300'
];

btn.addEventListener('click',function(){

    let img = document.createElement('img')

    let x= Math.random()*100
    let y= Math.random()*100
    let r= Math.random()*360

let randomImg= Math.floor(Math.random()*images.length)
img.src = images[randomImg]
    img.style.width='80px'
    img.style.height='80px'
    img.style.position='absolute'
    img.style.top= y+'%'
    img.style.left = x+'%'
    img.style.rotate = r+'deg'
    img.style.objectFit = 'cover'

    // console.log(img);
    main.appendChild(img)
    
})