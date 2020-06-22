function add() {
    let number = 0;
    return () => {
        document.body.textContent = `Aktualny stan licznika to ${++number}`;
    }
}
const counter = add();

document.addEventListener('click', counter);