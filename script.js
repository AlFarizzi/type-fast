// data
    let data = [
        "archieve","ecstasy", "museum", "urine", "eagle", "reader", "policy", "agree",
        "professional", "late", "thread", "seize", "mushroom", "konowledge", "throne", "seller", "energy",
        "project", "aware", "horn", "price","sheep", "rule", "chest", "rescue", "throat", "fine", "blue",
        "stand", "instruction", "infrastrcture", "reward", "detector", "tribute", "deposit", "architecture",
        "economist", "corner", "cord", "scale", "coorporative", "context", "intension", "morale", "chord", "statement",
        "giant", "distant"
    ]
    let userInput = [];
    let right = [];
    let wrong = [];
// data

// UI
    let li = '';
    data.forEach(dat => {
        li+= `<li class="list-group-item ml-3 mt-3" id="${dat}">${dat}</li>`
    });
    document.getElementById('list').innerHTML = li
    let time = 61;
// UI

// Logic

    function exec() {
        let value = input.value;
        userInput.push(value);
        input.value = '';
    }

    let btn = document.getElementById('send');
    let input = document.getElementById('input');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        exec();
    })
    window.addEventListener('keydown', (e) => {
        if(e.key === "Enter") {
            exec();
            console.log(data);
        }
        
    })
    
    setInterval(() => {
        time-=1;
        document.getElementById('time').innerHTML = '';
        document.getElementById('time').innerHTML = `<b>${time}</b>`;
        if(time === 0) {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < userInput.length; j++) {
                    if(data[i] === userInput[j]) {
                        right.push(userInput[i])
                        data[i] = null
                        document.getElementById(userInput[j]).classList.add('active')
                        // console.log(data);
                    }
                }
            }

            for (let k = 0; k < data.length; k++) {
                if(data[k] !== null) {
                    document.getElementById(data[k]).classList.add('bg-danger')
                    document.getElementById(data[k]).classList.add('text-white')
                    wrong.push(data[k]);
                }
            }
            document.getElementById('result').innerHTML = `
                Jumlah Benar : ${right.length} <br/>
                Kecepatan : ${right.length} Words / Minute <br/>
                Jumlah Salah : ${wrong.length} <br/>
            `
            clearInterval(1);
            input.placeholder = "Finish"
            input.disabled = true
        }
    }, 1000);

// Logic

