let coders = [];
let count = 1;

export function onlyLetter(input){
    input.value = input.value
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
    .replace(/^\s+/g, '')
    .toLowerCase();
}

export function onlyEmailChars(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
    return regex.test(email);

}

function addCoder(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const clan = document.getElementById("clan").value.trim();

    if(!name | email | !clan){
        swal.fire({
            icon:'erro',
            title: ' field empty or invalid ',
            text:'Pleas complet all the fields corect'

        });
        return;
        }
    }

    const exist = coders.some(p =>
        p.name.toLowerCase() === name.toLowerCase() &&
        p.clan.toLowerCase() === clan.toLowerCase()
    );
    if (exist){
        Swal.fire({
            icon:'warning',
            title:'Coder repeat',
            text:'This coders is already resgistered in that clan '
        })

        const newCoder = {
            id: countId++,
            name,
            email,
            clan
        };

        coders.push(newCoder);
        showCoders();

        document.getElementById(name).value = '';
        document.getElementById(email).value = '';
        document.getElementById(clan).value = '';

        Swal.fire({
            icon:'success',
            title: 'Coder Add',
            text: 'The coder to add'
    });
    }

    function showCoders(){
        const table = document.getElementById('table-coders');
        table.innerHTML = '';

        coders.forEach(p => {
            const line = document.createElement('tr');

            line.innerHTML =  `
             <td>${p.id}</td>
            <td><input type="text" value="${p.name}" onchange="editarProducto(${p.id}, 'name', this.value)"></td>
            <td><input type="email" value="${p.email}" onchange="editarProducto(${p.id}, 'email', this.value)"></td>
            <td><input type="text" value="${p.clan}" onchange="editarProducto(${p.id}, 'clna', this.value)"></td>
            <td><button onclick="eliminarProducto(${p.id})">Eliminar</button></td> 
             `; 

            table.appendChild(line);

        });
    }

    window.updateCoder = function (name, field,clan ){
        const coder = coders.find(p => p.id === id);
        if(!coder) return;

        if (field === 'email'){
            email = parseFloat(email);
            if(email) return;
        }
        coder[field] = email;
    }

    window.deleteCoder = function (id){
        coders = coders.filter(p => p.id !== id);
        showCoders();
    }
    
    const btn = document.getElementById(btnsave);
    btn.addEventListener('click', addCoder);

    window.onlyLetter = onlyLetter
    window.onlyEmailChars = onlyEmailChars



















































    // function addCoder() {
    //   const name = document.getElementById("name").value.trim();
    //   const email = document.getElementById("email").value.trim();
    //   const clan = document.getElementById("clan").value.trim();

    //   if (!name || !email || !clan) {
    //     alert("Please fill out all fields.");
    //     return;
    //   }

    //   coders.push({ name, email, clan });
    //   document.getElementById("name").value = "";
    //   document.getElementById("email").value = "";
    //   document.getElementById("clan").value = "";

    //   renderCoders();
    //   renderClans();
    // }

    // function deleteCoder(index) {
    //   coders.splice(index, 1);
    //   renderCoders();
    //   renderClans();
    // }

    // function renderCoders() {
    //   const container = document.getElementById("codersContainer");
    //   container.innerHTML = "";

    //   coders.forEach((coder, index) => {
    //     const div = document.createElement("div");
    //     div.className = "coder-item";
    //     div.innerHTML = `
    //       <span><strong>${coder.name}</strong> - ${coder.email} - ${coder.clan}</span>
    //       <button class="delete-btn" onclick="deleteCoder(${index})">Delete</button>
    //     `;
    //     container.appendChild(div);
    //   });
    // }

    // function renderClans() {
    //   const clanMap = new Map();

    //   coders.forEach(coder => {
    //     if (!clanMap.has(coder.clan)) {
    //       clanMap.set(coder.clan, []);
    //     }
    //     clanMap.get(coder.clan).push(coder);
    //   });

    //   const container = document.getElementById("clansContainer");
    //   container.innerHTML = "";

    //   clanMap.forEach((group, clan) => {
    //     const div = document.createElement("div");
    //     div.innerHTML = `<h3>${clan}</h3>`;
    //     group.forEach(coder => {
    //       div.innerHTML += `<p>• ${coder.name} (${coder.email})</p>`;
    //     });
    //     container.appendChild(div);
    //   });
    // }