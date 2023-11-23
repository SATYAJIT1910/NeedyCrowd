import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x68F6896FEAa6216Bda358cf1880af34aCf0d1784"
);

export default instance;
