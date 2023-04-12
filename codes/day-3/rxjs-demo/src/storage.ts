import { BehaviorSubject } from "rxjs";

class Storage {
    private dataStore: BehaviorSubject<string> = new BehaviorSubject<string>('');

    observableStorage = this.dataStore.asObservable()

    public publishData(data: string): void {
        this.dataStore.next(data)
    }
}

export const storage = new Storage()