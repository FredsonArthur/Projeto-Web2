class EmployeeDoesntExists extends Error {
  constructor() {
    super();
    this.status = 404;
    this.message = "Empregado não existe";
    this.name = "EmployeeDoesntExists";
  }
}

module.exports = { EmployeeDoesntExists };
