export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    rouched: false,
    value: '',
  }
}
