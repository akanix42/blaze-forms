import Field from '../fields/field'

export default class SimpleSchemaValidator {
  constructor(schema) {
    this.form = null;
    this.schemaContext = schema.newContext()
  }

  async validate(data) {
    if (this.schemaContext.validate(data)) return true

    return this._mapValidationErrors()
  }

  async validateField(data, fieldName) {
    if (this.schemaContext.validateOne(data, fieldName)) return true

    // field.
    return false
  }

  _mapValidationErrors() {
    const invalidKeys = this.schemaContext.invalidKeys()
    invalidKeys.map(key=> {
      return { fieldName: key, error: this.schemaContext.keyErrorMessage(key)}
    })
  }
}