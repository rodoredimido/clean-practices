(() => {

    function isRedFruit( fruit: string ): boolean {
        const fruitsName = ['manzana', 'cereza', 'cereza']
        return  fruitsName.includes(fruit)
    }

    type TFruitColor = 'red'| 'yellow' | 'purple' 
    function getFruitsByColor( color: TFruitColor ): string[] {
        const fruitColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas']
        }

        if (!Object.keys(fruitColor).includes(color))
            throw Error('the color must be: red, yellow, purple')
        
        return fruitColor[color] 
    }

    let isFirstStepWorking  = true
    let isSecondStepWorking = true
    let isThirdStepWorking  = true
    let isFourthStepWorking = true

    function workingSteps() {
        if (!isFirstStepWorking) return 'First step broken.'
        if (!isSecondStepWorking) return 'Second step broken.'
        if( !isThirdStepWorking) return 'Third step broken.'
        if (!isFourthStepWorking) return 'Fourth step broken.'

        return 'Working properly!'
    }

    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' })
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' })

    console.log({ redFruits: getFruitsByColor('red') })
    console.log({ yellowFruits: getFruitsByColor('yellow') })
    console.log({ purpleFruits: getFruitsByColor('purple') }) 
    // console.log({ pinkFruits: getFruitsByColor('pink') })

    console.log({ workingSteps: workingSteps() })


})()
