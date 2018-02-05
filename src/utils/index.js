/**
 * 
 * @param {*成功时的参数} options
 * @returns object 
 */
exports.sendSuccessMsg = (options={}) => {
  const {message, code, data} = options
  return {
    code: code || 200,
    message,
    data: data || []
  }
}
/**
 * 
 * @param {*失败时的参数} options
 * @returns object 
 */
exports.sendErrorMsg = (options = {}) => {
  const {message, code} = options
  return {
    code: code || -200,
    message
  }
}