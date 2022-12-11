
const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.querySelector('#syntax').innerHTML = '';
    document.querySelector('#pronunciation').innerHTML = 'pronunciation: ';
    document.querySelector('ol').innerHTML = '';

    const word = document.querySelector('input').value;
    
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=92cdd2aa-35cc-400e-a84c-4e0faaa20429`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].fl);
            console.log(data);
            // repeat serach term in the DOM
            document.querySelector('#word').innerHTML = `${word}`;
            // access array and place part of speech in the DOM
            document.querySelector('#syntax').innerHTML = `<em>${data[0].fl}</em>`
            // acces array and place pronunciation in the DOM
            document.querySelector('#pronunciation').innerHTML = `pronunciation: ${data[0].hwi.prs[0].mw}`
            // access array and iterate through all elements to pull definition
            data[0].shortdef.forEach( e => {
                // acesss elements to verify
                console.log(e);
                // create an li for each element
                const li = document.createElement('li');
                // add text to li
                li.textContent = e;
                // append each li to the ul
                document.querySelector('#definition').appendChild(li);
            });
        })
        // error handling
        .catch(err => {
            console.log(`error is: ${err}`);
            document.querySelector('#word').innerHTML = `${word} not found`;
        })
});