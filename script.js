document.addEventListener('DOMContentLoaded', () => {
    // --- BASE DE DATOS DE CURSOS EXTRAÍDA DE TU ARCHIVO ---
    const cursosDB = [
        { id: 'PEM101', nombre: 'DESARROLLO DEL PENSAMIENTO NUMÉRICO Y ALGEBRAICO', semestre: 1, creditos: 6, prerequisitos: [], tipo: 'disciplinar-didactico', hito: false },
        { id: 'EPC007', nombre: 'APRENDIZAJE Y DESARROLLO DEL PENSAMIENTO', semestre: 1, creditos: 4, prerequisitos: [], tipo: 'pedagogico', hito: false },
        { id: 'CFG001', nombre: 'CURSO FORMACIÓN GENERAL', semestre: 1, creditos: 4, prerequisitos: [], tipo: 'formacion-general', hito: false },
        { id: 'PEM103', nombre: 'DESARROLLO DEL PENSAMIENTO ANALÍTICO', semestre: 1, creditos: 6, prerequisitos: [], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM104', nombre: 'DESARROLLO DEL PENSAMIENTO ESTADÍSTICO', semestre: 1, creditos: 4, prerequisitos: [], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM102', nombre: 'DESARROLLO DEL PENSAMIENTO GEOMÉTRICO', semestre: 1, creditos: 6, prerequisitos: [], tipo: 'disciplinar-didactico', hito: false },
        { id: 'EPC001', nombre: 'TRANSFORMACIONES SOCIOCULTURALES EN EL ESPACIO EDUCATIVO', semestre: 2, creditos: 4, prerequisitos: [], tipo: 'pedagogico', hito: false },
        { id: 'PEM201', nombre: 'ÁLGEBRA', semestre: 2, creditos: 6, prerequisitos: [], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM202', nombre: 'GEOMETRÍA EUCLIDIANA', semestre: 2, creditos: 6, prerequisitos: [], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM204', nombre: 'COMPUTACIÓN Y PENSAMIENTO ALGORÍTMICO', semestre: 2, creditos: 4, prerequisitos: [], tipo: 'disciplinar-didactico', hito: false },
        { id: 'CFG002', nombre: 'CURSO DE FORMACIÓN GENERAL', semestre: 2, creditos: 4, prerequisitos: [], tipo: 'formacion-general', hito: false },
        { id: 'PEM203', nombre: 'CÁLCULO DIFERENCIAL EN UNA VARIABLE', semestre: 2, creditos: 6, prerequisitos: [], tipo: 'disciplinar-didactico', hito: false },
        { id: 'EPC012', nombre: 'TEORÍA Y DESARROLLO DEL CURRÍCULUM', semestre: 3, creditos: 4, prerequisitos: [], tipo: 'formacion-general', hito: false },
        { id: 'PEM301', nombre: 'ÁLGEBRA LINEAL', semestre: 3, creditos: 6, prerequisitos: ['PEM101', 'PEM201'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM302', nombre: 'GEOMETRÍA ANALÍTICA', semestre: 3, creditos: 6, prerequisitos: ['PEM102', 'PEM202'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM304', nombre: 'HISTORIA Y EPISTEMOLOGÍA DE LAS MATEMÁTICAS', semestre: 3, creditos: 4, prerequisitos: ['PEM201', 'PEM202'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'CFG003', nombre: 'CURSO DE FORMACIÓN GENERAL', semestre: 3, creditos: 4, prerequisitos: [], tipo: 'formacion-general', hito: false },
        { id: 'PEM303', nombre: 'CÁLCULO INTEGRAL EN UNA VARIABLE', semestre: 3, creditos: 6, prerequisitos: ['PEM103', 'PEM203'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM403', nombre: 'CÁLCULO DIFERENCIAL E INTEGRAL MULTIVARIABLE', semestre: 4, creditos: 6, prerequisitos: ['PEM303'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'CFG004', nombre: 'CURSO DE FORMACIÓN GENERAL', semestre: 4, creditos: 4, prerequisitos: [], tipo: 'formacion-general', hito: false },
        { id: 'EPC013', nombre: 'DISEÑO DEL APRENDIZAJE EN AULAS INCLUSIVAS', semestre: 4, creditos: 4, prerequisitos: [], tipo: 'pedagogico', hito: false },
        { id: 'PEM402', nombre: 'GEOMETRÍAS NO EUCLIDIANAS', semestre: 4, creditos: 6, prerequisitos: ['PEM302'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM404', nombre: 'PRÁCTICA INICIAL', semestre: 4, creditos: 4, prerequisitos: [], tipo: 'practicas-y-graduacion', hito: true },
        { id: 'PEM401', nombre: 'FUNDAMENTOS DE LA DIDÁCTICA DE LAS MATEMÁTICAS', semestre: 4, creditos: 6, prerequisitos: ['EPC007'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM501', nombre: 'ÁLGEBRA ABSTRACTA', semestre: 5, creditos: 6, prerequisitos: ['PEM301'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM504', nombre: 'PROGRAMACIÓN Y ROBÓTICA EDUCATIVA', semestre: 5, creditos: 4, prerequisitos: ['PEM204'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'EPC014', nombre: 'EVALUACIÓN COMO APRENDIZAJE', semestre: 5, creditos: 4, prerequisitos: [], tipo: 'pedagogico', hito: false },
        { id: 'PEM502', nombre: 'DIDÁCTICA DE LA GEOMETRÍA', semestre: 5, creditos: 6, prerequisitos: ['PEM401', 'PEM302'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM503', nombre: 'MODELOS PROBABILÍSTICOS DISCRETOS', semestre: 5, creditos: 6, prerequisitos: ['PEM104'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'CFG005', nombre: 'CURSO DE FORMACIÓN GENERAL', semestre: 5, creditos: 4, prerequisitos: [], tipo: 'formacion-general', hito: false },
        { id: 'PEM601', nombre: 'DIDÁCTICA DEL ÁLGEBRA', semestre: 6, creditos: 6, prerequisitos: ['PEM401', 'PEM301'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM602', nombre: 'SISTEMA NUMÉRICOS', semestre: 6, creditos: 6, prerequisitos: ['PEM501'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM603', nombre: 'MODELOS PROBABILÍSTICOS CONTINUOS', semestre: 6, creditos: 6, prerequisitos: ['PEM503', 'PEM303'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'CFG006', nombre: 'CURSO DE FORMACIÓN GENERAL', semestre: 6, creditos: 4, prerequisitos: [], tipo: 'formacion-general', hito: false },
        { id: 'EPCM03', nombre: 'LA LABOR DOCENTE EN LA SOCIEDAD DIGITAL', semestre: 6, creditos: 4, prerequisitos: [], tipo: 'pedagogico', hito: false },
        { id: 'PEM604', nombre: 'PRÁCTICA INTERMEDIA I', semestre: 6, creditos: 4, prerequisitos: ['PEM404'], tipo: 'practicas-y-graduacion', hito: true },
        { id: 'EPC015', nombre: 'ÉTICA Y PROFESIÓN DOCENTE', semestre: 7, creditos: 4, prerequisitos: [], tipo: 'pedagogico', hito: false },
        { id: 'PEM702', nombre: 'DIDÁCTICA DE LOS SISTEMAS NUMÉRICOS', semestre: 7, creditos: 6, prerequisitos: ['PEM401', 'PEM201'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM703', nombre: 'ESTADÍSTICA INFERENCIAL', semestre: 7, creditos: 6, prerequisitos: ['PEM603', 'PEM104'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM705', nombre: 'PENSAMIENTO COMPUTACIONAL E INTERDISCIPLINARIEDAD', semestre: 7, creditos: 4, prerequisitos: ['PEM504'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM701', nombre: 'EVALUACIÓN EN EDUCACIÓN MATEMÁTICA', semestre: 7, creditos: 4, prerequisitos: ['EPC014'], tipo: 'disciplinar-didactico', hto: false },
        { id: 'PEM704', nombre: 'PRÁCTICA INTERMEDIA II', semestre: 7, creditos: 6, prerequisitos: ['PEM401', 'PEM604'], tipo: 'practicas-y-graduacion', hito: false },
        { id: 'PEM801', nombre: 'DESAFÍOS DEL PROFESORADO DE MATEMÁTICAS: DIVERSIDAD E INCLUSIÓN', semestre: 7, creditos: 6, prerequisitos: ['EPC013', 'PEM404'], tipo: 'disciplinar-didactico', hito: true },
        { id: 'PEM805', nombre: 'OPTATIVO', semestre: 8, creditos: 4, prerequisitos: [], tipo: 'optativo', hito: true },
        { id: 'EPC016', nombre: 'METODOLOGÍA DE INVESTIGACIÓN EDUCATIVA', semestre: 8, creditos: 4, prerequisitos: [], tipo: 'pedagogico', hito: false },
        { id: 'PEM802', nombre: 'DIDÁCTICA DEL CÁLCULO', semestre: 8, creditos: 6, prerequisitos: ['PEM401', 'PEM303'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM803', nombre: 'DIDÁCTICA DE LA ESTADÍSTICA Y LAS PROBABILIDADES', semestre: 8, creditos: 6, prerequisitos: ['PEM401', 'PEM503'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM804', nombre: 'PENSAMIENTO COMPUTACIONAL EN LA MODELACIÓN', semestre: 8, creditos: 4, prerequisitos: ['PEM504'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM904', nombre: 'PRÁCTICA PROFESIONAL I', semestre: 9, creditos: 12, prerequisitos: ['PEM704'], tipo: 'practicas-y-graduacion', hito: false },
        { id: 'PEM902', nombre: 'SEMINARIO DE GRADO I', semestre: 9, creditos: 6, prerequisitos: ['CREDITOS_232'], tipo: 'practicas-y-graduacion', hito: false },
        { id: 'PEM903', nombre: 'DISEÑOS DIDÁCTICOS CON APOYO DE TECNOLOGÍAS EDUCATIVAS', semestre: 9, creditos: 4, prerequisitos: ['PEM401', 'PEM705'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM905', nombre: 'OPTATIVO', semestre: 9, creditos: 4, prerequisitos: [], tipo: 'optativo', hito: true },
        { id: 'PEM901', nombre: 'DESAFÍOS DEL PROFESORADO DE MATEMÁTICAS: LIDERAZGO Y CONVIVENCIA', semestre: 9, creditos: 4, prerequisitos: ['PEM404'], tipo: 'disciplinar-didactico', hito: false },
        { id: 'PEM002', nombre: 'PRÁCTICA PROFESIONAL II', semestre: 10, creditos: 16, prerequisitos: ['PEM904'], tipo: 'practicas-y-graduacion', hito: false },
        { id: 'PEM001', nombre: 'SEMINARIO DE GRADO II', semestre: 10, creditos: 14, prerequisitos: ['PEM902'], tipo: 'practicas-y-graduacion', hito: false }
    ];

    const container = document.getElementById('malla-container');
    const creditosAprobadosEl = document.getElementById('creditos-aprobados');
    const resetButton = document.getElementById('reset-button');
    let cursosAprobados = new Set(JSON.parse(localStorage.getItem('cursosAprobados')) || []);

    const calcularCreditosAprobados = () => {
        return Array.from(cursosAprobados).reduce((acc, id) => {
            const curso = cursosDB.find(c => c.id === id);
            return acc + (curso ? curso.creditos : 0);
        }, 0);
    };

    const renderMalla = () => {
        container.innerHTML = '';
        const totalCreditos = calcularCreditosAprobados();
        creditosAprobadosEl.textContent = totalCreditos;
        
        const maxSemestre = Math.max(...cursosDB.map(c => c.semestre));
        
        for (let i = 1; i <= maxSemestre; i++) {
            const semestreColumna = document.createElement('div');
            semestreColumna.classList.add('semestre-columna');
            semestreColumna.innerHTML = `<div class="semestre-titulo">Semestre ${i}</div>`;
            
            cursosDB.filter(c => c.semestre === i).forEach(curso => {
                const cursoDiv = document.createElement('div');
                cursoDiv.classList.add('curso');
                cursoDiv.dataset.id = curso.id;

                const prerequisitosCumplidos = curso.prerequisitos.every(pr => {
                    if (pr.startsWith('CREDITOS_')) {
                        const creditosNecesarios = parseInt(pr.split('_')[1], 10);
                        return totalCreditos >= creditosNecesarios;
                    }
                    return cursosAprobados.has(pr);
                });
                
                if (cursosAprobados.has(curso.id)) {
                    cursoDiv.classList.add('aprobado');
                } else if (prerequisitosCumplidos) {
                    cursoDiv.classList.add('disponible');
                } else {
                    cursoDiv.classList.add('bloqueado');
                }

                cursoDiv.classList.add(curso.tipo.replace(/\s+/g, '-').toLowerCase());
                if(curso.hito) {
                    cursoDiv.classList.add('hito');
                }
                
                cursoDiv.innerHTML = `
                    <div class="curso-nombre">${curso.nombre}</div>
                    <div class="curso-creditos">Créditos: ${curso.creditos}</div>
                `;
                
                cursoDiv.addEventListener('click', () => toggleAprobacion(curso, prerequisitosCumplidos));
                semestreColumna.appendChild(cursoDiv);
            });
            container.appendChild(semestreColumna);
        }
    };

    const toggleAprobacion = (curso, prerequisitosCumplidos) => {
        const yaAprobado = cursosAprobados.has(curso.id);
        
        if (yaAprobado) {
            cursosAprobados.delete(curso.id);
            actualizarEstado();
        } else if (prerequisitosCumplidos) {
            cursosAprobados.add(curso.id);
            actualizarEstado();
        } else {
            // NUEVA LÓGICA: Mostrar prerrequisitos faltantes
            const totalCreditos = calcularCreditosAprobados();
            const faltantes = curso.prerequisitos.filter(pr => {
                 if (pr.startsWith('CREDITOS_')) {
                    const creditosNecesarios = parseInt(pr.split('_')[1], 10);
                    return totalCreditos < creditosNecesarios;
                }
                return !cursosAprobados.has(pr);
            });

            const nombresFaltantes = faltantes.map(prId => {
                if (prId.startsWith('CREDITOS_')) {
                    const creditosNecesarios = prId.split('_')[1];
                    return `Tener ${creditosNecesarios} créditos aprobados (tienes ${totalCreditos}).`;
                }
                const prereqCurso = cursosDB.find(c => c.id === prId);
                return prereqCurso ? prereqCurso.nombre : prId;
            });

            if (nombresFaltantes.length > 0) {
                alert(`Prerrequisitos faltantes para "${curso.nombre}":\n\n• ${nombresFaltantes.join('\n• ')}`);
            }
        }
    };

    const actualizarEstado = () => {
        localStorage.setItem('cursosAprobados', JSON.stringify(Array.from(cursosAprobados)));
        renderMalla();
    };

    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar el progreso de la malla? Se borrarán todos los cursos aprobados.')) {
            cursosAprobados.clear();
            actualizarEstado();
        }
    });

    // Iniciar la aplicación
    renderMalla();
});
