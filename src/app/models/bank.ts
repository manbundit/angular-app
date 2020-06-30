export class Bank {
    constructor(
        public id: number,
        public title: string,
        public image_url: string,
        public paymentMethod?: PaymentMethod[]
    ) {}
}

class PaymentMethod {
    constructor(public id: number, public methodName: string) {}
}
