export default class Form {
  constructor(fields = [], validator = null) {
    this.fields = {}
    this.validator = validator

    fields.forEach(field=>this.addField(field))
  }

  addField(field) {
    this.fields[field.name] = field
    this[field.name] = field
  }

  removeField(fieldName) {
    this.fields[fieldName] = null
    this[fieldName] = null
  }

  getData() {
    const data = {}
    const keys = Object.keys(this.fields)
    keys.forEach(key => data[key] = this.fields[key].value)
  }

  async validate() {
    if (!this.validator) throw new Error('Form does not have a validator')

    return this.validator.validate(this.getData())
  }
}