type TSize = '' | 'S' | 'M' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: TSize = ''

    ) {}

    idProductReady(): boolean {
        for (const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if (!(<string><unknown>this[key]).length) 
                        throw new Error(`${key} is empty`)
                    break;
                
                case 'number':
                    if (!(<number><unknown>this[key])) 
                        throw new Error(`${key} is zero`)
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not supported!`)
            }
        }
        return true
    }
    
    toString() {
        // no Dry
        // if (!this.name.length)
        //     throw new Error('name is empty.')
        // if (!this.price)
        //     throw new Error('price is zero.')
        // if (!this.size.length)
        //     throw new Error('size is empty.') 
        
        if (!this.idProductReady()) return;
        
        return `${this.name} (${this.price}, ${this.size})`
    }
}
(
    () => {
        const bluePant = new Product('Blue Large Pants', 10, 'M')
        console.log(bluePant.toString())
    }
)()