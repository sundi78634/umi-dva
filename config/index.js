/**
 * @author Sun
 * @description config
 */

module.exports = {
  name: 'config',
  /**
   * 服务端口号
   * @type {Number}
   */
  PORT: 3005,
  /**
   * 请求是否加密
   * @type {Boolean}
   */
  encode: false,
  /**
   * 请求加密密钥
   * @type {String}
   */
  encodeKey: 'st_pbu_yc_portal',
  /**
   * 后端地址
   * @type {String}
   */
  httpUrl: 'http://jsonplaceholder.typicode.com/',
};
