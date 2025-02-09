let p=prompt("Who's there?",'');
if(p==null || p===''){
    alert('Canceled');
}
else if(p=='Admin'){
    let pass=prompt("Password?",'');
    if(pass == 'TheMaster'){
        alert('Welcome!');
    }
    else if(pass==null || pass===''){
        alert('Canceled');
    }
    else{
        alert('Wrong password');
    }
}
else{
    alert("I don't know you");
}