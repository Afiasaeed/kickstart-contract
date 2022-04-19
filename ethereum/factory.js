import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const  instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
   '0x0fD5e5B398b12B26D1c69EaFbe2096E0B5BBCFa9'
 );
 export default instance;
