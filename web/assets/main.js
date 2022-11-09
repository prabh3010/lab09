const editButtons = document.querySelectorAll('.edit');

for(const button of editButtons) {
    // button.parentElement.parentElement.insertAdjacentHTML('afterend', '<tr>dupa</tr>')
    button.addEventListener('click', () => {
        const form = document.querySelector('#form');
        form && form.parentNode.removeChild(form);
//        debugger;
        const row = button.parentElement.parentElement;
        row.insertAdjacentElement('afterend', buildForm());
    })
}

const buildForm = (email) => {
    const row = document.createElement('tr')
    const cell = document.createElement('td')
    const form = document.createElement('form')
    
    const labelEmail = document.createElement('label')
    const labelFirst = document.createElement('label')
    const labelLast = document.createElement('label')
    const labelPassword = document.createElement('label')
    const labelRole = document.createElement('label')
    
    const inputEmail = document.createElement('label')
    
    row.setAttribute('id', 'form')
    
    cell.setAttribute('colspan', '5')
    
    form.setAttribute('action', 'user')
    form.setAttribute('method', 'POST');
    form.innerHTML = 'dupa';
    row.appendChild(cell)
    cell.appendChild(form)
    console.log(row)
    return row;
}

`
<tr id="form">
    <form action="user" method="POST">
        dupa
    </form>
</tr>
`;
