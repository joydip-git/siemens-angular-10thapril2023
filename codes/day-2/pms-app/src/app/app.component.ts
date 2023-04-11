import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Product Management"
    numbers = [1, 2, 3]
    person = {
        name: 'anil',
        salary: 1000
    }
    people = [
        {
            name: 'anil',
            salary: 1000,
            friends: ['sunil', 'mahesh']
        },
        {
            name: 'sunil',
            salary: 2000,
            friends: []
        }
    ]
    // constructor() {
    //     for (let num of this.numbers) {
    //         console.log(num)
    //     }
    // }
}