// EXO 1
const divToColor1 = document.querySelector('.div-to-color-1')
const btns1 = document.querySelectorAll('.btn-1')

btns1.forEach((el) => {
    el.addEventListener('click', (e) => {
        divToColor1.style.backgroundColor = e.target.textContent
    })
})

// EXO 2
const textToDisplay2 = document.querySelector('.text-to-display-2')
const form2 = document.querySelector('.form-2')
const input2 = document.querySelector('.input-2')

form2.addEventListener('submit', (e) => {
    e.preventDefault()
    textToDisplay2.textContent = input2.value;
})

// EXO 3
const textToDisplay3 = document.querySelector('.text-to-display-3')
const input3 = document.querySelector('.input-3')

input3.addEventListener('input', (e) => {
    textToDisplay3.textContent = e.target.value
})

//EXO 4
const textToDisplay4 = document.querySelector('.text-to-display-4')
const input4 = document.querySelectorAll('.input-4')

const difference = 0;

input4[0].addEventListener('change', (e) => {
    textToDisplay4.textContent = `Trip last ${getDifferenceBetweenDates(input4[0].value, input4[1].value)} days`
})

input4[1].addEventListener('change', (e) => {
    textToDisplay4.textContent = `Trip last ${getDifferenceBetweenDates(input4[0].value, input4[1].value)} days`
})

function getDifferenceBetweenDates(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

//EXO 5
const textToDisplay5 = document.querySelector('.text-to-display-5')
const input5 = document.querySelector('.input-5')

input5.addEventListener('input', (e) => {
    textToDisplay5.textContent = e.target.value
})

//EXO 6
const textToDisplay6 = document.querySelector('.text-to-display-6')
const select6 = document.querySelector('.select-6')

select6.addEventListener('change', (e) => {
    textToDisplay6.textContent = e.target.value
})

//EXO 7
const divToColor7 = document.querySelector('.div-to-color-7')
const input7 = document.querySelector('.input-7')
input7.addEventListener('input', (e) => {
    divToColor7.style.backgroundColor = e.target.value
})

//EXO 8
const divToColor8 = document.querySelector('.div-to-color-8')
const btns8 = document.querySelectorAll('.btn-8')

btns8.forEach((el) => {
    el.addEventListener('click', (e) => {
        divToColor8.style.backgroundColor = e.target.getAttribute('data-color')
    })
})

//EXO 9
const textToDisplay9 = document.querySelector('.text-to-display-9')
const checkboxes = document.querySelectorAll('.checkbox')

checkboxes.forEach((el) => {
    el.addEventListener('change', (e) => {
        textToDisplay9.textContent = `${checkboxes[0].checked ? checkboxes[0].value : ''}${checkboxes[0].checked && checkboxes[1].checked ? ' - ' : ''}${checkboxes[1].checked ? checkboxes[1].value : ''}`
    })
})

// // const grid
// // const exo
// // const container-1
// // const btn-1

// // btn.addEventListener("click", () => {
// //     changecolor(container)
// // })

// // function changecolor(cont) {
// //     cont.textContent = "";
// //     for (let i = i++) {

// //     }
// //     }
// ///////////////////////////
// //EXO 1//
// //////////////////////////

// //CORRECTION//

// const div1 = document.querySelector('.div-to-color-1')
// const btns1 = document.querySelectorAll('.btn-1')

// for (let i = 0; i < btns1.length; i++) {
//     btns1[i].addEventListener('click', onBtn1Click)
// }

// function onBtn1Click(event) {
//     console.log(event.target.textContent)
//     div1.style.backgroundColor = event.target.textContent
// }



// ///////////////////////////
// //EXO 2//
// //////////////////////////
// const input2 = document.querySelector('.input-3')
// const result2 = document.querySelector('.text-to-display-3')

// input2.addEventListener('input', interactInput2)

// function interactInput2() {
//     result2.textContent = input2.value
// }

// /////////////////////////
// //EXO 3//
// ////////////////////////

// const input10 = document.querySelector('input-4')
// const display4 = document.querySelector('text-to-display-4')
// const start4 = document.querySelector("start")
// const end4 = document.querySelector("end")

// input10.addEventListener('input', interactInput10)

// const textToDisplay3 = document.querySelector('.text-to-display-3')
// const input3 = document.querySelector('.input-3')

// input3.addEventListener('input', (e) => {
//     textToDisplay3.textContent = e.target.value
// })




// //CORRECTION//

// const result3 = document.querySelector('.text-to-display-4')
// const inputs3 = document.querySelectorAll('.input-4')

// for (let i = 0; i < inputs3.length; i++) {
//     inputs3[i].addEventListener('input', onInputs3Change)
// }


// inputs3[1].addEventListener('input', onInputs3Change)

// function onInputs3Change() {
//     let result = getDaysBetweenDates(inputs3[1].value, inputs3[0].value)
//     result3.textContent = `Le séjour durera ${result} jours.`;
// }

// function getDaysBetweenDates(date2, date1) {
//     let d2 = new Date(date2)
//     let d1 = new Date(date1)
//     let diffTime = d2 - d1;
//     return (diffTime / (1000 * 60 * 60 * 24))
// }


// /////////////////////////
// //EXO 4//
// /////////////////////////

// // const input3 = document.querySelector('.input-2')
// // const result3 = document.querySelector('.text-to-display-2')
// // const btn3 = document.querySelector('.btn-3')

// // const form = document.querySelector('form')
// // form.addEventListener('submit', (e) => {
// //     e.preventDefault()
// // })

// // btn3.addEventListener('click', onBtn3Click)

// // function onBtn3Click() {
// //     result3.textContent = input3.value
// // }

// // CORRECTION //
// const result4 = document.querySelector('.text-to-display-2')
// const form4 = document.querySelector('.form-2')
// const input4 = document.querySelector('.input-2')

// form4.addEventListener('submit', onForm4Submit)

// function onForm4Submit(e) {
//     e.preventDefault();


//     result4.textContent = input4.value
// }


// /////////////////////////
// //EXO 5//
// /////////////////////////
// const result5 = document.querySelector('.text-to-display-5')
// const input5 = document.querySelector('.input-5')

// input5.addEventListener('input', onSlider5change)

// function onSlider5change() {
//     result5.textContent = input5.value
// }

// ou

// function onSlider5change(e) {
//     result5.textContent = e.target.value
// }

// ///////////////////////////
// //EXO 6//
// //////////////////////////

// const input6 = document.querySelector('.select-6')
// const result6 = document.querySelector('.text-to-display-6')

// input6.addEventListener('input', interactInput6)

// function interactInput6() {
//     result6.textContent = input6.value
// }






// ///////////////////////////
// //EXO 7//
// //////////////////////////

// const input7 = document.querySelector('.input-7')
// const colored7 = document.querySelector('.div-to-color-7')

// input7.addEventListener('input', interactColor)

// function interactColor() {
//     colored7.style.backgroundColor = input7.value
// }

// ///////////////////////////
// //EXO 8//
// //////////////////////////

// const div8 = document.querySelector('.div-to-color-8')
// const btns8 = document.querySelectorAll('.btn-8')


// for (let i = 0; i < btns8.length; i++) {
//     btns8[i].addEventListener('click', onBtn8Click)
// }

// function onBtn8Click(event) {
//     div8.style.backgroundColor = event.target.getAttribute('data-color')
// }


// ///////////////////////////
// //EXO 9//
// //////////////////////////

// const result9 = document.querySelector('.text-to-display-9')
// const checkboxes = document.querySelectorAll('.checkbox')

// for (let i = 0; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener('change', onCheckBoxChange)
// }

// document.getElementById("click").checked;

// checkboxes[0].addEventListener('input', onCheckBoxChange)
// checkboxes[1].addEventListener('input', onCheckBoxChange)

// function onCheckBoxChange() {
//     let str = ''
//     if (checkboxes[0].checked) {
//         str += checkboxes[0].value
//     }

//     if (checkboxes[1].checked) {
//         if (str) str += ' - '
//         str += checkboxes[1].value
//     }

//     result9.textContent = str

// }

// //AUTRE
// // document.getElementById('select').onclick = function() {
// //     let checkboxes = document.getElementsByName('vehicle');
// //     for (var checkbox of checkboxes)
// //     {
// //         if (checkbox.checked) {
// //             document.body.append(checkbox.value + ' ');
// //         }
// //     }
// // }






// ///////////////////////////

// //VOCABULAIRE

// // const //
// // La déclaration const permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.

// // document.querySelector //
// // La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.

// //Array.prototype.forEach()
// // La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.

// // STOP L'ACTUALISATION DE LA PAGE A CHAQUE REQUETTE
// // const form = document.querySelector('form')
// // form.addEventListener('submit', (e) => {
// //     e.preventDefault()
// // })

// // L' instanciation est le processus qui consiste à lire ou à spécifier des informations, telles que le type de stockage ou les valeurs d'un champ de données. Afin d'optimiser les ressources système, l'instanciation est gérée par l'utilisateur.