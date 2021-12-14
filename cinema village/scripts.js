function showhidetrailer(button){
    let trailer=document.getElementById('trailer').style;
    if (button.value === 'Show trailer') {
        trailer.display='block';
        button.value='Hide trailer'
    } else {
        trailer.display='none';
        button.value='Show trailer'
    }
} 