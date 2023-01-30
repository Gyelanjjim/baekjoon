const today = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = ("0" + (1 + date.getMonth())).slice(-2);
    const dd = ("0" + date.getDate()).slice(-2);

    return yyyy + "-" + mm + "-" + dd;    
} 
console.log( today() )