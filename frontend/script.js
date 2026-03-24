const statusMsg = document.getElementById('status');

async function registrar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    statusMsg.innerText = data.message;
    statusMsg.style.color = "green";
}

async function pagar() {
    const email = document.getElementById('email').value;
    const monto = document.getElementById('monto').value;

    const res = await fetch('http://localhost:5000/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, monto: Number(monto) })
    });
    const data = await res.json();
    statusMsg.innerText = data.message;
    statusMsg.style.color = data.message.includes('💸') ? "blue" : "red";
}