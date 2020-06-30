export class FormModel {
    constructor(
        public identity: number,
        public date: string,
        public bank: string,
        public method?: string
    ) {}
}
