const form = document.getElementById('ingreso-avenger');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formulario = e.target;

    const avenger = {
        alias: formulario[0].value,
        nombre: formulario[1].value,
        edad: parseInt(formulario[2].value)
    }

    if (avenger.edad < 18) {
        const p = document.getElementById('mensaje-error');
        p.innerText = 'Tienes que ser mayor de 18 años para ser un avenger';
        return;
    }

    const tabla = document.getElementById('tabla');
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${avenger.alias}</td>
        <td>${avenger.nombre}</td>
        <td>${avenger.edad}</td>
    `;

    tabla.append(tr);

    document.querySelectorAll('#ingreso-avenger input').forEach((input) => {
        input.value = '';
    });
});