export function Button(props: any) {
    console.log('hi there');
    return <button onClick={() => props.onClick()} />
}

export default Button;