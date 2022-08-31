
const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.querySelector('#syntax').innerHTML = '';
    document.querySelector('#pronunciation').innerHTML = 'pronunciation: ';
    document.querySelector('#short').innerHTML = 'definition: ';

    const word = document.querySelector('input').value;
    
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=92cdd2aa-35cc-400e-a84c-4e0faaa20429`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].fl);
            document.querySelector('#word').innerHTML = `${word}`;
            document.querySelector('#syntax').innerHTML = `<em>${data[0].fl}</em>`
            document.querySelector('#pronunciation').innerHTML = `pronunciation: ${data[0].hwi.prs[0].mw}`
            document.querySelector('#short').innerHTML = `definition: ${data[0].shortdef[0]}`;
        })
        .catch(err => {
            console.log(`error is: ${err}`);
            document.querySelector('#word').innerHTML = `${word} not found`;
        })
});