const jokes = document.querySelector('#joke');
const btnClick = document.querySelector('#btnClick');

const next = async () => {
    try {   
            const setHeader ={
                headers:{
                    Accept :"application/json"
                }
            }
            const res = await fetch('https://icanhazdadjoke.com', setHeader);
            const data = await res.json();
            jokes.innerHTML = data.joke;
        } catch (error) {
                console.log(`Error is found ${error}`);
        }
}

btnClick.addEventListener('click', next)
next();