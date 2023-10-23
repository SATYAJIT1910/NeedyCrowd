import fetch from "node-fetch";
export const getETHPrice = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
    );
    const data = await response.json();
    const ethPrice = data.ethereum.inr;
    return parseFloat(parseFloat(ethPrice).toFixed(2));
  } catch (error) {
    console.log(error);
  }
};

export const getWEIPriceInINR = (inr, wei) => {
  return parseFloat(convertWeiToETH(wei) * inr).toFixed(2);
};
export const getETHPriceInINR = (inr, eth) => {
  return parseFloat(eth * inr).toFixed(2);
};

export const getINRPriceToETH = (inr, eth) => {
  console.log("The inr is ",inr)
  console.log("The eth is",eth)
  console.log("THe value ",inr/eth)
  return parseFloat(inr / eth).toFixed(10).toString();
};

export const convertWeiToETH = (wei) => {
  return parseFloat(wei) / 1000000000000000000;
};
