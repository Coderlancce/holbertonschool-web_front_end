const globalVariable = "Welcome";

function outer(){
    const course = "Holberton";

    function inner(){
        const exclamation = "!";

        function inception(){
            alert(`${globalVariable} ${course} ${exclamation}`)
        }
        alert(`${globalVariable} ${course}`);
        inception();
    }
    alert(globalVariable);
    inner();
}

outer();