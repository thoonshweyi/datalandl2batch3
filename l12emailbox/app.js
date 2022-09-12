const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
    // createemaillist(e.target);
    // createemaillist(e.target.value);

    // createemaillist(this);
    createemaillist(this.value);

});

function createemaillist(inputtext){
    // console.log(inputtext);

    // split by (",")
    // const eitems = inputtext.split(',');
    // console.log(eitems);

    // remove empty
    // const eitems = inputtext.split(',').filter(rmempty => rmempty.trim() !== '');
    // console.log(eitems);

    // remove empty/space
    const eitems = inputtext.split(',').filter(rmempty => rmempty.trim() !== '').map(rmspace => rmspace.trim());
    // console.log(eitems);

    getemcontainer.innerHTML = '';
    eitems.forEach(function(eitem){
        const setnewspan = document.createElement('span');
        setnewspan.textContent = eitem;

        setnewspan.classList.add('email-item');
        // console.log(setnewspan);

        getemcontainer.appendChild(setnewspan);
    });
}


getbtn.addEventListener('click',function(e){
    sendemail();


    e.preventDefault();
});

function sendemail(){
    // console.log('I am working');
    const gettxtvalue = gettextarea.value;
    const getaddresses = document.querySelectorAll('.email-item');

    var persons = [];

    if(getaddresses.length > 0 && gettxtvalue){
        getaddresses.forEach(function(getaddress){
            persons.push({
                email : getaddress.textContent,
                message : gettxtvalue
            });
        });
        console.log(persons);
    }else{
        window.alert("Enter Message");
        gettextarea.focus();
    }
}
// 7EB