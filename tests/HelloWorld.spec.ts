import "@nomiclabs/hardhat-waffle";
import { ethers } from "hardhat";
import { expect } from "chai";

const CONTRACT_NAME = "HelloWorld" as const;

describe("HelloWorld Contract", function () {
  it("returns expected string value 'Hello, World!'", async function () {
    const HelloWorld = await ethers.getContractFactory(CONTRACT_NAME);
    const helloWorld = await HelloWorld.deploy();
    await helloWorld.deployed();
    expect(await helloWorld.sayHello()).to.equal("Hello, World!");
  });
});
