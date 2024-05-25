import * as CryptoJS from 'crypto-js';
import { KEY_CRYPTOJS } from '../constants'

const encodeData = (data:any) => {
  // const hash = CryptoJS.HmacSHA256(data, KEY_CRYPTOJS)
   const hash = CryptoJS.HmacSHA256(data, KEY_CRYPTOJS)
  const hashInBase64 = CryptoJS.enc.Base64.stringify(hash)
  return hashInBase64
}
export default encodeData
