// Obtiene el pantalla con la clase 'Pantalla'
const pantalla = document.querySelector('.Pantalla') as HTMLElement;
const widthBox = document.querySelectorAll('input[type="number"]')[0] as HTMLInputElement;
const heightBox = document.querySelectorAll('input[type="number"]')[1] as HTMLInputElement;
const marginBox = document.querySelectorAll('input[type="number"]')[2] as HTMLInputElement;
const arrselect = document.querySelectorAll<HTMLSelectElement>('select');
const generateCode = document.querySelectorAll('button')[2] as HTMLButtonElement
const selectFlexWrap = arrselect[0]
const selectFlexDireaction = arrselect[1]
const selecJustifyContent = arrselect[2]
const alignItems = arrselect[3]
const aligContent = arrselect[4]
let widthPxl = 50
let heightPxl = 50
let marginPxl = 10

// Función para agregar un nuevo div
function addDiv(): void {
  const newDiv = document.createElement('div');
  newDiv.style.width = `${widthPxl}px`;
  newDiv.style.height = `${heightPxl}px`;
  newDiv.style.margin = `${marginPxl}px`
  newDiv.style.backgroundColor = 'lightblue';
  newDiv.style.border = '1px solid black';

  pantalla.appendChild(newDiv);
}

// Función para eliminar el último div
function delDiv(): void {
  if (pantalla.lastElementChild) {
    pantalla.removeChild(pantalla.lastElementChild);
  }
}


const modifyPxl = (type:string, value:number) => {
    
    if(type == "height"){
        heightPxl = value
        localStorage.setItem("height", `${value}`)
    }else{
        widthPxl = value
        localStorage.setItem("width", `${value}`)
    }

}





widthBox.addEventListener('change', (e:Event) => {
    e.preventDefault();
    modifyPxl("width", +widthBox.value)
})

heightBox.addEventListener('change', (e) => {
    e.preventDefault();
    modifyPxl("height", +heightBox.value)
})

selectFlexWrap.addEventListener('change', () =>  {
    console.log(selectFlexWrap.value)    
    pantalla.style.flexWrap  = selectFlexWrap.value   
})

selectFlexDireaction.addEventListener('change', () =>  {
    console.log(selectFlexDireaction.value)    
    pantalla.style.flexDirection  = selectFlexDireaction.value   
})

selecJustifyContent.addEventListener('change', () => {
    pantalla.style.justifyContent = selecJustifyContent.value
})

alignItems.addEventListener('change', () => {
    pantalla.style.justifyContent = alignItems.value
})

aligContent.addEventListener('change', () => {
    pantalla.style.alignContent = aligContent.value
})

// Añade listeners a los botones
document.querySelector('button:nth-of-type(1)')?.addEventListener('click', (e) => {
  e.preventDefault(); // Evita el comportamiento por defecto del formulario
  addDiv();
});

document.querySelector('button:nth-of-type(2)')?.addEventListener('click', (e) => {
  e.preventDefault(); // Evita el comportamiento por defecto del formulario
  delDiv();
});

marginBox?.addEventListener('change', () => {
    marginPxl = +marginBox.value
});

generateCode.addEventListener('click', (e:Event) => {
    e.preventDefault()
    const codigo = `
    <pre>
        padre{
            display: flex;
            flex-direction: ${selectFlexDireaction.value};
            flex-wrap: ${selectFlexWrap.value};
            justify-content: ${selecJustifyContent.value};
            align-items: ${alignItems.value};
            align-content: ${aligContent.value};
        }    
    </pre>`
    const boxPre = document.getElementById("codigo")
    boxPre?.classList.add("boxPre")
    boxPre?.classList.remove("boxPreHidden")
    boxPre!.innerHTML = codigo


})


