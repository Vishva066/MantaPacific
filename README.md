# MantaPacific
Contract deployment on Manta Pacific Testnet

# Pre-requisites
1.NodeJS

2.NPM

## NVM

**Note**: If **Method 1** fails then follow **Method 2**.

**Method 1**

Install NVM (Node Version Manager), open a terminal and execute the following command.
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

```
Close the current terminal and open a new one.

In the new terminal execute this command to verify nvm has been installed

```
command -v nvm

```
**Method 2**

- Open the /etc/hosts file using 


```
sudo nano /etc/hosts

```
or

```
sudo gedit /etc/hosts

```

- Add the following IP address at the end of the file:


```
185.199.108.133 raw.githubusercontent.com

```

- Save and close the file.


```
source ~/.bashrc

```
To install NVM (Node Version Manager), execute the following command.
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

```
Close the current terminal and open a new one.

In the new terminal execute this command to verify nvm has been installed

```
command -v nvm

```

## NodeJS (Ver 18.x)

Execute the following command to install NodeJs
```
nvm install --lts
```  

Check  the version of nodeJS installed
```
node -v
```

Check  the version of npm installed
```
npm -v

```


## Hardhat

To install the dependencies use
```
npm install
```

To compile the contract use
```

npx hardhat compile
```

To deploy the contract use

```
npx hardhat run scripts/deploy.js --network manta
```

**Note**: Copy the **contract address** to **interact.js**.

To interact with the contract use

```
npx hardhat run scripts/interact.js --network manta
```
