function checkout(){
    n=document.getElementById('name').value;
    sn=document.getElementById('surname').value;
    Em=document.getElementById('email').value;
    pw=document.getElementById('PW').value;
    pw2=document.getElementById('PW2').value;
    f=document.getElementById('f').checked;
    h=document.getElementById('h').checked;
    py=document.getElementById('villes').value;
    
    if(n==""){
        window.alert("nom est necissare");

    }
    if(sn==""){
        window.alert("prénom est necissare");
        
    }
    if(Em==""){
        window.alert("Emaile est necissare");
        
    }
    if(pw==""){
        window.alert("mot de pass est necissare");
        
    }
    if(pw!=pw2){
        window.alert("n'est pas la meme mot de pass");
        
    }
    if(!f&&!h){
        window.alert("mettre votre gendre");
    }
    if(py==""){
        window.alert("mot de pass est necissare");
        
    }
}