const generarCalculadora =()=>{
    let calculadora = document.createElement("div")
    calculadora.innerHTML = 
        `<div class="div-calculadora>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>=</button>
            <button>+</button>
    </div>`
    document.body.append(calculadora)
    }
    
    const btn = document.querySelector("#calculadora")
        btn.addEventListener("click",generarCalculadora)
    