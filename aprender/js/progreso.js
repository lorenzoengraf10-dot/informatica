/* Progreso del alumno: lecciones completadas, código editado por lección
 * y notas personales. Todo en localStorage, nada se envía a ningún servidor. */

const Progreso = (() => {
  const CLAVE_COMPLETADAS = 'ap_completadas';

  function obtenerCompletadas() {
    const guardado = localStorage.getItem(CLAVE_COMPLETADAS);
    return guardado ? JSON.parse(guardado) : [];
  }

  function estaCompletada(id) {
    return obtenerCompletadas().includes(id);
  }

  function alternarCompletada(id) {
    const completadas = obtenerCompletadas();
    const indice = completadas.indexOf(id);
    if (indice === -1) {
      completadas.push(id);
    } else {
      completadas.splice(indice, 1);
    }
    localStorage.setItem(CLAVE_COMPLETADAS, JSON.stringify(completadas));
  }

  function obtenerCodigoGuardado(id) {
    const guardado = localStorage.getItem('ap_codigo_' + id);
    return guardado ? JSON.parse(guardado) : null;
  }

  function guardarCodigo(id, codigo) {
    localStorage.setItem('ap_codigo_' + id, JSON.stringify(codigo));
  }

  function borrarCodigoGuardado(id) {
    localStorage.removeItem('ap_codigo_' + id);
  }

  function obtenerNotas(id) {
    return localStorage.getItem('ap_notas_' + id) || '';
  }

  function guardarNotas(id, texto) {
    localStorage.setItem('ap_notas_' + id, texto);
  }

  function reiniciarTodo() {
    Object.keys(localStorage)
      .filter((clave) => clave.startsWith('ap_'))
      .forEach((clave) => localStorage.removeItem(clave));
  }

  return {
    obtenerCompletadas,
    estaCompletada,
    alternarCompletada,
    obtenerCodigoGuardado,
    guardarCodigo,
    borrarCodigoGuardado,
    obtenerNotas,
    guardarNotas,
    reiniciarTodo
  };
})();
