/**
 * Created by David on 2/10/16.
 */

export class Patient {
    constructor (
        public id: number,
        public name: string,
        public address1: string,
        public address2: string,
        public city: string,
        public state: string,
        public zip: string
    ){}
}