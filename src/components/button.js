import glamorous from "glamorous";

export let Button = glamorous.button({
    border: '1px solid #ccc',
    padding: '10px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    outline: 'none',
    cursor: 'pointer'
}, ({primary, style}) => ({
    background: primary ? 'orangered' : '#eee',
    color: primary ? '#fff' : '#000',
    borderColor: primary ? 'transparent' : '#ccc',
    ...style
}))