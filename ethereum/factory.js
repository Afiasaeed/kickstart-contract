import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const  instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
   '0x33Db78ee551C341B3B08786A9047a4827ce72876'
 );
 export default instance;
