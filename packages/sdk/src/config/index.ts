import { Network } from "@aptos-labs/ts-sdk";
import { HyperionSDK, SDKOptions } from "..";

interface InitHyperionSDKOptions {
  network: Network.MAINNET | Network.TESTNET;
  // API Key of Aptos
  APTOS_API_KEY: string;
}

const TESTNET_CONFIG: SDKOptions = {
  network: Network.TESTNET,
  contractAddress:
    "0x41639ff06db072c728f61e31405ddfda0d78e14eaf45c2e3588a5f5cc1ce2a66",
  hyperionFullNodeIndexerURL: "https://api-testnet.hyperion.xyz/v1/graphql",
  officialFullNodeIndexerURL: "https://api.testnet.aptoslabs.com/v1/graphql",
  APTOS_API_KEY: "",
};

const MAINNET_CONFIG: SDKOptions = {
  network: Network.MAINNET,
  contractAddress:
    "0x8b4a2c4bb53857c718a04c020b98f8c2e1f99a68b0f57389a8bf5434cd22e05c",
  hyperionFullNodeIndexerURL: "https://api.hyperion.xyz/v1/graphql",
  officialFullNodeIndexerURL: "https://api.mainnet.aptoslabs.com/v1/graphql",
  APTOS_API_KEY: "",
};

export function initHyperionSDK(options: InitHyperionSDKOptions) {
  const { network, APTOS_API_KEY } = options;
  return new HyperionSDK({
    ...(network == Network.MAINNET ? MAINNET_CONFIG : TESTNET_CONFIG),
    APTOS_API_KEY,
  });
}
