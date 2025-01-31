const submit_button = document.getElementById(`submit_button`)

let verse = [0, 1, 2, 3, 4]
let start = 3

submit_button.onclick = function show_verse(){
    for(let i=0; i<=verse.length; i++){
        function showVerseLoop(start){
            for(i=start; i>=verse.length; i++){
                console.log(`${verse[i]}`);
                console.log(`${i}`);
            }

        }
        showVerseLoop(start)
        console.log(`False`);
    }
}
