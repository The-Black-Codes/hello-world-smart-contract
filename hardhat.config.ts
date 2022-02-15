import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";

export default {
  solidity: "0.8.10",
  paths: {
    tests: "./tests",
  },
} as HardhatUserConfig;
