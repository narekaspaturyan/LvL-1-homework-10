let log = console.log


//ex1

class Author {
    constructor(name, email, gender) {
        this.name = name
        this.email = email
        this.gender = gender
    }

    get name() {
        return this._name
    }

    set name(v) {
        this._name = v
    }

    get email() {
        return this._email
    }

    set email(v) {
        this._email = v
    }

    get gender() {
        return this._gender
    }

    set gender(v) {
        this._gender = v
    }

    toString() {
        return `If you want to contact me here is my email: ${this.email}`
    }
}


class Book {
    constructor(title, author, price, quantity) {
        this.title = title
        this.price = price
        this.quantity = quantity
        this.author = author
    }
    get title() {
        return this._title
    }
    set title(v) {
        this._title = v
    }
    get author() {
        return this._author
    }
    set author(v) {
        if (v instanceof Author) {
            this._author = v
        }
    }
    get price() {
        return this._price
    }

    set price(v) {
        this._price = v
    }

    get quantity() {
        return this._quantity
    }

    set quantity(v) {
        this._quantity = v
    }

    getProfit() {
        if (typeof this.quantity === "number" &&
            typeof this.price === "number") {
            return "The profit is " + this.quantity * this.price
        } else return "please enter a number"
    }

    toString() {
        return `The book's author is: ${this.author.name} and title is  ${this.title}`
    }
}

let at = new Author()

at.name = "Raffi";
at.email = "mail.am";
at.gender = "male";

let book = new Book()

book.author = at
book.price = 6000
book.title = "Xent"
book.quantity = 50

log(book.getProfit())
log(book.toString())
log(at.toString())


//ex 2


class Account {
    constructor(id, name, balance) {
        this._id = id;
        this.name = name;
        this.balance = balance;
    }
    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst instanceof Account && accountSecond instanceof Account) {
            if (accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name) {
                return "They are the same Account"
            } else return "They are different Accounts"
        }
    }
    get name() {
        return this._name
    }
    set name(v) {
        this._name = v
    }
    get balance() {
        return this._balance
    }
    set balance(v) {
        this._balance = v
    }
    get id() {
        return this._id
    }

    credit(amount) {
        this.balance += amount
        return this.balance
    }
    debit(amount) {
        if (amount < this.balance) {
            this.balance -= amount
            return this.balance
        } else return "Amount exceeded balance."
    }
    transferTo(anotherAccount, amount) {
        if (amount < this.balance) {
            this.balance -= amount
            anotherAccount.balance += amount
            return this.balance
        } else return "Amount exceeded balance."
    }
    toString() {
        return `The balance is ${this.balance}`
    }
}

let my = new Account("01", "arek", 5000)
let mt = new Account("01", "narek", 5000)

log(my.balance = 7000)
log(my.credit(4000))
log(my.debit(2000))

log(Account.identifyAccounts(my, mt))

log(my.toString())


// ex 3


class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    get firstName() {
        return this._firstName
    }
    set firstName(v) {
        this._firstName = v
    }
    get lastName() {
        return this._firstName
    }
    set lastName(v) {
        this._lastName = v
    }
    get gender() {
        return this._gender
    }
    set gender(v) {
        this._gendrer = v
    }
    get age() {
        return this._age
    }
    set age(v) {
        this._age = v
    }
    toString() {
        return `Person's fullname is ${this.firstName} ${this.lastName} `
    }
}

class Student extends Person {
    constructor(program, year, fee) {
        super()
        this.program = program;
        this.year = year;
        this.fee = fee;
        this.data = {}
        for (let key of this.program) {
            this.data[key] = 0
        }
    }

    get program() {
        return this._program
    }
    set program(arr) {
        if (Array.isArray(arr)) {
            for (let el of arr) {
                if (typeof el !== "string") {
                    throw new Error("Please insert array of strings in the program")
                }
            }
            this._program = arr
        } else throw new Error("Please insert array of strings in the program")
    }
    get year() {
        return this._year
    }
    set year(v) {
        this._year = v
    }
    get fee() {
        return this._fee
    }
    set fee(v) {
        this._fee = v
    }
    passExam(stProgram, grade) {
        let arr = []
        if (this.program.includes(stProgram)) {
            this.data[stProgram] = grade
        } else return "Enter program subject"

        for (let key in this.data) {
            if (this.data[key] >= 50) {
                arr.push(true)
                if (arr.length === this.program.length) {
                    this.year += 1
                }
            }
        }
    }

    toString() {
        return "Welcome to our uiversity"
    }
}

class Teacher extends Person {
    constructor(program, pay) {
        super()
        this.program = program;
        this.pay = pay;
    }
    get program() {
        return this._program
    }
    set program(v) {
        if (typeof v === 'string') {
            this._program = v
        } else throw new Error("Please write a string in the program argument")
    }
    get pay() {
        return this._pay
    }
    set pay(v) {
        this._pay = v
    }
    toString() {
        return `Ticher's salary is ${this.pay}`
    }
}

let arr = ["math", "english", 'literature']

let student = new Student(arr, 2020, 250000)

student.firstName = "Narek"

student.passExam("math", 55)
student.passExam("english", 69)
student.passExam("literature", 50)
log(student.passExam("lit", 50))
log(student)