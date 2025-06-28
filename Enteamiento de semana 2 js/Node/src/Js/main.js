// If function is by the prompt is running in vite. Change the Promoted Import to this (const prompt = require("prompt-sync")) and run on normal console.


// library that allows you to use the prompt on console
import PromptSync from 'prompt-sync';  

// const prompt = require("prompt-sync")
const prompt = PromptSync();  

// List of coders
let coders = []


//A menu of options that allows you to navigate
function showMenu(){
    console.log('\n=== MENÚ CRUD ===');
    console.log('1. Add Coder');
    console.log('2. Show Coders');
    console.log('3. Update Coder');
    console.log('4. Delete Coder');
    console.log('5. View Coders by Clan')
    console.log('6. Exit');

    const option = prompt('Select an option: ');

    switch(option){

        case '1':
            addCoder();
            break;
        case '2':
            showCoders();
            break;
        case '3':
            updateCoder();
            break;
        case '4':
            deleteCoder();
            break;
        case '5':
            viewByClan();
            break;
        case '6':
            console.log('Exiting...');
            proccess.exit(0);
            return;
        default:
            console.log('Invalid option, please try again.');
    }
    // called of the function
    showMenu();
}

function addCoder(){
    const id = prompt('ID of the coder: ');
    if (coders[id]){
        console.log('A coder with that ID already exists');
        return;
    }

const name = prompt('Enter coder name: ')
const email = prompt('Enter coder email: ')
const clan = prompt('Enter coder clan: ')

coders[id] = {name,email,clan};
console.log('Coder add');
}

function showCoders(){
    console.log('\n=== Product List ===')
    if (Object.keys(coders).length === 0){
        console.log('No coder.');
        return;
    }
    for (const id in coders){
        const {name, email, clan} = coders[id];
        console.log(`ID:${id} | Name:${name} | Emai: ${email} | Clan: ${clan}`);
    }
}

function updateCoder(){
    const id = prompt(' Enter the ID of the Coder to upadte:');
    if (!coders[id]){
        console.log('Coder not fount');
        return;
    }

    const newName =  prompt('Enter new name(leave empty to keep current): ')
    const newEmail = prompt('Enter new email(leave empty to keep current): ')
    const newClan = prompt('Enter new clan(leave empty to keep current):')

    if(newName) coders[id].name = newName
    if(newEmail) coders[id].email = newEmail
    if(newClan) coders[id].clan = newClan

    console.log('Coder update.')
}

function deleteCoder(){
    const id = prompt('Enter the ID of the coder to delete: ');
    if (!coders[id]){
        console.log('No Coder found with that ID.');
    }

    delete coders[id];
    console.log('Coder delete.')
}


function viewByClan(){
    console.log('\n=== Coders Grouped by Clan ===');

    const clanMap = new Map();

    for (const id in coders){
        const coder = coders[id];
        if(!clanMap.has(coder.clan)){
            clanMap.set(coder.clan, []);
        }
        clanMap.get(coder.clan).push(coder);
    }

    if (clanMap.size === 0){
        console.log('No coders available');
        return;
    }

    for (const [clan, coderList] of clanMap){
        console.log(`Clan:${clan}`);
        coderList.forEach(coder => {
            console.log(` - ${coder.name} (${coder.email})`)
        });
    }
}
// called of the function
showMenu();


