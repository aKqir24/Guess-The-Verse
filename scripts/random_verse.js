const play_button = document.getElementById("play_button") 

play_button.onclick = function getRandomVerse(){
    let verse_index = ["1Ch", "2h", "Matt", "Luke", "Mark"];
    let choose_random_verse = verse_index[Math.floor(Math.random() * verse_index.length)];
    let index_number = Number(verse_index.indexOf(`${choose_random_verse}`));

    function WriteVerse(verse_index_number){
        console.log(`verse_index_number ${verse_index_number}`)
        //console.log(`${verse_index.length} - ${index_number} is equals to ${verse_index.length-index_number}`);
        for(let i=index_number; i<=verse_index_number; i++){
            setTimeout(LoadingVerse, 100);
            function LoadingVerse(){ 
                document.getElementById("chosen_verse_text").textContent = `${verse_index[i]}`;
                console.log(`${verse_index[i]}\n Index = ${i}\n ${verse_index.length} + ${index_number} is equals to ${verse_index.length-index_number}`);
            }
        }
    
    }

    if (index_number == 0){ 
        console.log(`0`);
        WriteVerse(verse_index.length-index_number-1);
    }
    else if(index_number == Number(index_number.length)){
        console.log(`index.length`);
        WriteVerse(verse_index.length-index_number)
    }
    else if(index_number == 3){
        WriteVerse(verse_index.length-index_number);
    }
    
    else{
        console.log(`<=0`);
        console.log(`${index_number}`)
        WriteVerse(verse_index.length-index_number);
    }
}