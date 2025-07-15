async function cargarMalla() {
  const res = await fetch('malla.json');
  const data = await res.json();
  const contenedor = document.getElementById('malla');
  const aprobados = new Set();

  for (const semestre in data) {
    const columna = document.createElement('div');
    columna.className = 'columna';
    const titulo = document.createElement('h2');
    titulo.textContent = `Semestre ${semestre}`;
    columna.appendChild(titulo);

    data[semestre].forEach(curso => {
      const div = document.createElement('div');
      div.className = `curso bloqueado ${curso.eje.toLowerCase()}`;
      if (curso.hito) div.classList.add('hito');
      div.innerHTML = `<strong>${curso.codigo}</strong><br>${curso.nombre}<br><em>${curso.creditos} créditos</em>`;
      div.dataset.codigo = curso.codigo;
      div.dataset.prer = JSON.stringify(curso.prerrequisitos);

      div.addEventListener('click', () => {
        if (div.classList.contains('bloqueado')) return;
        div.style.border = '2px solid limegreen';
        aprobados.add(curso.codigo);
        desbloquearCursos(aprobados);
      });

      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }

  desbloquearCursos(aprobados);
}

function desbloquearCursos(aprobados) {
  document.querySelectorAll('.curso').forEach(div => {
    const prereqs = JSON.parse(div.dataset.prer);
    const bloqueado = prereqs.some(pr => !aprobados.has(pr));
    div.classList.toggle('bloqueado', bloqueado);
  });
}

cargarMalla();