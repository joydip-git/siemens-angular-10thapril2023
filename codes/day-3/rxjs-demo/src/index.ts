import { Subscription, map, filter } from "rxjs"
import { getData } from "./observable"
import { storage } from './storage'


const numberObservable = getData()

const subscription: Subscription = numberObservable
    .pipe(
        map(
            (arr) => {
                return arr.map(
                    (num) => num * 5
                )
            }
        )
    )
    .subscribe({
        next: (arr) => {
            arr.forEach((num) => console.log(num))
        },
        error: (err) => {
            console.log(err.message)
        },
        complete: () => {
            console.log('all done')
        }
    })

//the component who wants to publish
storage.publishData('joydip')

//the component who wants to get the published data
storage.observableStorage.subscribe({
    next: (data) => console.log(data),
    error: (err) => console.log(err)
})

console.log('complete')
    // const numberObserver: Partial<Observer<number[]>> = {
//     next: () => { },
//     error: () => { },
//     complete: () => { }
// }