import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x0A55a2fbcd722d4C07333E092147737B37Fe3c6A"
);

export default instance;
