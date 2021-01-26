const PURPLE_KEYS = ['1','2','3','4','5','6','7','8','9','0','-','='];
const GREEN_KEYS = ['q','w','e','r','t','y','u','i','o','p','[',']'];
const BLUE_KEYS = ['a','s','d','f','g','h','j','k','l',';',`'`];

const keys = document.querySelectorAll('.key')
const purpleKeys = document.querySelectorAll('.key.purple')
const greenKeys = document.querySelectorAll('.key.green')
const blueKeys = document.querySelectorAll('.key.blue')

keys.forEach(key =>{
    key.addEventListener('click', ()=> playNote(key))
})


document.addEventListener('keydown', (e) => {
    if (e.repeat) return
    const key = e.key 
    const purpleKeysIndex = PURPLE_KEYS.indexOf(key)
    const greenKeysIndex = GREEN_KEYS.indexOf(key)
    const blueKeysIndex = BLUE_KEYS.indexOf(key)

    if (purpleKeysIndex > -1 )playNote(purpleKeys[purpleKeysIndex])
    if (greenKeysIndex > -1 )playNote(greenKeys[greenKeysIndex])
    if (blueKeysIndex>-1) playNote(blueKeys[blueKeysIndex])
})


function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime= 0
    noteAudio.play() 
}
