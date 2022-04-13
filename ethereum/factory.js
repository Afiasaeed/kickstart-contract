import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const  instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
   '0xcD8bA89D58a2212C80876A2Fd25D83ce022E367A'
 );
 export default instance;
