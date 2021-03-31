const values = [
    ['position', 'absolute'],
    ['top', '0px'],
    ['left', '0px'],
    ['right', '0px'],
    ['bottom', '0px'],
]

type Styles = Record<string,string>;

export default function cover() {
    return values.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {} as Styles)
}