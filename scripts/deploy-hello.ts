import "@nomiclabs/hardhat-ethers";
import { Contract } from "ethers";
import { ethers } from "hardhat";

const CONTRACT_NAME = "HelloWorld";

async function main(): Promise<Contract> {
  const HelloWorld = await ethers.getContractFactory(CONTRACT_NAME);
  const helloWorld = await HelloWorld.deploy();
  await helloWorld.deployed();
  return helloWorld;
}

async function sayHello(hello: Contract): Promise<void> {
  console.log("From Contract:", await hello.sayHello());
}

main().then(sayHello).catch(console.error);
