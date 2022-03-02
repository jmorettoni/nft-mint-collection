import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MarsNftBox1',
  tokenName: 'Basic Colony BOX',
  tokenSymbol: 'MARTIANS',
  hiddenMetadataUri: 'ipfs://QmRc94SegEv64s44CZ4ERhdXdD7WQxFWUJs3pr8xZMkxkr/hidden.json',
  maxSupply: 2000,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx:  20,
  },
  contractAddress: '0xFe4c5f3B61b0EA6707FD35d31EDAA69400f64068',
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
};
// TO GENERATE CONTRACT : yarn deploy --network rinkeby
// after generate your contract run :  yarn verify CONTRACT --network rinkeby
//yarn whitelist-open --network rinkeby 
//yarn whitelist-close --network rinkeby 
//yarn presale-open --network rinkeby 
//yarn presale-close --network rinkeby 
//yarn public-sale-open --network rinkeby 
//yarn public-sale-close --network rinkeby  
//yarn reveal  --network rinkeby 
export default CollectionConfig;
