type Point = {
    x: number,
    y: number
}

type D3Ping = Point & {
    z: number
}

interface IPoint {
    x: number
    y: number
}

interface I3DPoint extends IPoint {
    z: number
}

let a: number = 5
const b: string = 'something'
let c: boolean = true


const d: number[] = [1, 2, 3]
const e: any[] = [1, 2, '3']

function test(n: number): number | string {
    return '4'
}

const test2 = (a: number): number => a * a

a = d.reduce((acc: number, curr) => acc + curr, 0)

function countCoord(coord: { lat: number, long?: number }) {

}

function printId(id: number | string) {
    if (typeof id === 'number') {
        console.log(id.toString())
    } else if (typeof id === 'string') {
        return id.toUpperCase()
    }

}

function getSum(data: number | number[]) {
    if (Array.isArray(data)) {
        return data.reduce((acc, curr) => acc + curr, 0)
    } else {
        return data
    }

}

function print(coord: Point) {

}

const q = (point: IPoint) => {
    const d: I3DPoint = point as I3DPoint
}

interface Info {
    desc: string
    isActive: boolean
}

interface Tags {
    name: string
    value: number
}


interface JsonObj {
    'userId': number
    'id': 1
    'title': string
    info: Info
    tags: Tags[]
}

const obj: JsonObj = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "info": {
        "desc": "delectus aut autem",
        "isActive": true
    },
    "tags": [
        {
            "name": "my name",
            "value": 1000
        }
    ]
}

// Литеральные типы
{
    let c: 'test' = 'test'

    type actionType = 'up' | 'down'

    function performAction(action: actionType): -1 | 1 {
        switch (action) {
            case "down":
                return -1
            case "up":
                return 1
        }
    }
}


enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

enum Dice {
    One = 1,
    Two,
    Three
}

function ruDice(dice: Dice) {
    switch (dice) {
        case Dice.One:
            return 'один'
        case Dice.Two:
            return 'два'
        case Dice.Three:
            return 'трии'
        default:
            const a: never = dice
    }
}

//картедж
const w: [number, string, number] = [0,'a',1]

function logTime<T>(num: T): T{
    console.log(new Date())
    return num
}

logTime<string>('asd')


interface MyInterface {
    transform: <T,F> (a: T) => F
}
