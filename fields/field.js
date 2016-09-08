import { ReactiveField } from 'meteor/peerlibrary:reactive-field'

export default class Field {
  constructor(options = {}) {
    this._value = new ReactiveField(options.value || '')
    this._name = new ReactiveField(options.name || '')
    this._label = new ReactiveField(options.label || '')
    this._errorMessage = new ReactiveField(options.errorMessage || '')
    this._validationStatus = new ReactiveField(options.validationStatus || Field.ValidationStatus.UNVALIDATED)
    this.form = null;
    this.validator = null;
  }

  get name() {
    return this._name()
  }

  set name(name) {
    this._name(name)
  }

  get value() {
    return this._value()
  }

  set value(value) {
    this._value(value)
  }

  get label() {
    return this._label()
  }

  set label(label) {
    this._label(label)
  }

  get errorMessage() {
    return this._errorMessage()
  }

  set errorMessage(errorMessage) {
    this._errorMessage(errorMessage)
  }

  get validationStatus() {
    return this._validationStatus()
  }

  set validationStatus(validationStatus) {
    this._validationStatus(validationStatus)
  }

  isInvalid() {
    return this.validationStatus() === 'invalid'
  }

  validate() {
    if (this.validator) {
      return this.validator.validate(this.value())
    }

    if (this.form) {
      return this.form.validator.validateField(this)
    }
  }
}

Field.ValidationStatus = {
  UNVALIDATED: 'unvalidated',
  VALID: 'valid',
  INVALID: 'invalid',
}