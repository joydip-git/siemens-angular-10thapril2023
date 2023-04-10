import { joydipTrainer, add } from "./trainer";

// var x: number = 10
// var personName: string = 'Joydip'
// var isTrainer: boolean = true
document
    .getElementById('cmdShow')
    .addEventListener('click', call)

function call() {
    var spanSubjectElement = document.getElementById('spanSubject')
    var spanInfoElement = document.getElementById('spanInfo')

    spanSubjectElement.innerText = joydipTrainer.subject
    spanInfoElement.innerText =
        joydipTrainer.print()

    console.log(add(10, 20))
}