Libro = (titulo, editorial, fechaPrimeraEdicion, isbn) => {
  const sThis = this;
  this.datosLibro = {
    titulo: titulo,
    editorial: editorial,
    autor: {},
    fechaPrimeraEdicion: fechaPrimeraEdicion,
    isbn: isbn,
  };

  this.devuelveVerdadero = () => {
    return true;
  };

  this.compruebaIsbn = () => {
    let partesIsbn = isbn.split("-");
    let nPartes = partesIsbn.length;
    if (nPartes !== 5) {
      return false;
    } else {
      let valido = true;
      for (let i = 0; i < nPartes; i++) {
        let estaParte = partesIsbn[i];
        if (!/([0-9])*$/.test(estaParte)) {
          valido = true;
          break;
        }
      }
      return valido;
    }
  };

  checkCampo = (nombreCampo) => {
    if (nombreCampo === "isbn") {
      return this.compruebaIsbn;
    } else {
      return devuelveVerdadero;
    }
  };

  getTitulo = () => {
    return sThis.datosLibro.titulo;
  };
  setTitulo = (titulo) => {
    sThis.datosLibro.titulo = titulo;
  };

  getEditorial = () => {
    return sThis.datosLibro.editorial;
  };
  setEditorial = (editorial) => {
    sThis.datosLibro.editorial = editorial;
  };

  getAutor = () => {
    return sThis.datosLibro.autor;
  };
  setAutor = (autor) => {
    sThis.datosLibro.autor = autor;
  };

  getFechaPrimeraEdicion = () => {
    return sThis.datosLibro.fechaPrimeraEdicion;
  };
  setFechaPrimeraEdicion = (fechaPrimeraEdicion) => {
    sThis.datosLibro.fechaPrimeraEdicion = fechaPrimeraEdicion;
  };

  getIsbn = () => {
    return sThis.datosLibro.isbn;
  };
  setIsbn = (isbn) => {
    sThis.datosLibro.isbn = isbn;
  };

  return {
    checkCampo: checkCampo,
    getTitulo: getTitulo,
    setTitulo: setTitulo,
    getEditorial: getEditorial,
    setEditorial: setEditorial,
    getAutor: getAutor,
    setAutor: setAutor,
    getFechaPrimeraEdicion: getFechaPrimeraEdicion,
    setFechaPrimeraEdicion: setFechaPrimeraEdicion,
    getIsbn: getIsbn,
    setIsbn: setIsbn,
  };
};

module.exports = Libro;
