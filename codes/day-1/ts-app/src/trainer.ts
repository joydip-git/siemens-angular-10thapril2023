export var joydipTrainer = {
    //value properties
    name: 'Joydip',
    id: 1,
    salary: 10000,
    subject: 'JavaScript',
    //functional properties
    print: function () {
        return this.name + ' ' + this.salary
    }
}

export function add(a: number, b: number): number {
    return a + b
}