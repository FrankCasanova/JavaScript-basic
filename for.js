estudiantes = ['maria', 'sergio', 'rosa', 'daniela']

function saludar_estudiante(estudiante){
    console.log(`Hola, ${estudiante}`)
}

// for (index = 0; index < estudiantes.length; index+=1){
//     saludar_estudiante(estudiantes[index])

// }

for (estudiante of estudiantes){
    saludar_estudiante(estudiante)
}
