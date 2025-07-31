import Sdk from '@1inch/cross-chain-sdk'
import * as process from 'node:process'

export const config = {
    ownerPk: process.env.OWNER_PRIVATE_KEY,
    userPk: process.env.USER_PRIVATE_KEY,
    resolverPk: process.env.RESOLVER_PRIVATE_KEY,
    chain: {
        ethereum: {
            chainId: Sdk.NetworkEnum.ETHEREUM,
            url: "https://eth.merkle.io",
            createFork: true,
            limitOrderProtocol: '0x111111125421ca6dc452d289314280a0f8842a65',
            wrappedNative: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            ownerPrivateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
            tokens: {
                USDC: {
                    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                    donor: '0xd54F23BE482D9A58676590fCa79c8E43087f92fB'
                }
            }
        },
        binance: {
            chainId: Sdk.NetworkEnum.BINANCE,
            url: "wss://bsc-rpc.publicnode.com",
            createFork: true,
            limitOrderProtocol: '0x111111125421ca6dc452d289314280a0f8842a65',
            wrappedNative: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            ownerPrivateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
            tokens: {
                USDC: {
                    address: '0x8965349fb649a33a30cbfda057d8ec2c48abe2a2',
                    donor: '0x4188663a85C92EEa35b5AD3AA5cA7CeB237C6fe9'
                }
            }
        },
        sepolia: {
            chainId: 11155111, // Sepolia
            // url: "https://eth-sepolia.g.alchemy.com/public",
            url: "https://sepolia.drpc.org",
            createFork: false,
            limitOrderProtocol: '0xfD2d1e3F8c4D6ef2386e756824E09316673dE9dC',
            wrappedNative: '0xc4C937B059311BFbbb9EbF763D3Ac1F7127e9AD1',
            ownerPrivateKey: process.env.OWNER_PRIVATE_KEY,
            tokens: {
                USDC: {
                    address: '0x41FBc84ab268123583Be8Ea7FE99553Bec1a6ec4',
                    donor: '0x3784Fe4C992871AdCC85dfee2B593bA3253Acc79'
                }
            }
        },
        xlayertestnet: {
            chainId: 195, // X Layer testnet
            url: "https://testrpc.xlayer.tech",
            createFork: false,
            limitOrderProtocol: '0xb75f2E2ac461C481599A274108f6bdfED73DD87C',
            wrappedNative: '0x7B05b8cb6B56dd2614f7F7457046561B1851FAc4',
            ownerPrivateKey:  process.env.OWNER_PRIVATE_KEY,
            tokens: {
                USDC: {
                    address: '0x4945Bc992C3FbD65FA8156B2b7521Cb47F1E2bE1',
                    donor: '0x3784Fe4C992871AdCC85dfee2B593bA3253Acc79'
                }
            }
        },
        xlayerdevnet: {
            chainId: 195, // X Layer devnet
            url: "http://localhost:8123",
            createFork: false,
            limitOrderProtocol:  process.env.XLAYERDEVNET_LOP_ADDRESS,
            wrappedNative: process.env.XLAYERDEVNET_WETH_ADDRESS,
            ownerPrivateKey:  process.env.OWNER_PRIVATE_KEY,
            tokens: {
                USDC: {
                    address:  process.env.XLAYERDEVNET_WETH_ADDRESS,
                    donor: process.env.OWNER_ADDRESS
                }
            }
        },
        xlayerdevnet2: {
            chainId: 197, // X Layer devnet
            url: "http://localhost:8124",
            createFork: false,
            limitOrderProtocol:  process.env.XLAYERDEVNET2_LOP_ADDRESS,
            wrappedNative: process.env.XLAYERDEVNET2_WETH_ADDRESS,
            ownerPrivateKey:  process.env.OWNER_PRIVATE_KEY,
            tokens: {
                USDC: {
                    address:  process.env.XLAYERDEVNET2_WETH_ADDRESS,
                    donor: process.env.OWNER_ADDRESS
                }
            }
        },
        etherlinktestnet: {
            chainId: 128123, // Etherlink Testnet
            url: "https://node.ghostnet.etherlink.com",
            createFork: false,
            limitOrderProtocol: '0x111111125421ca6dc452d289314280a0f8842a65',   // TODO
            wrappedNative: '0x86932ff467A7e055d679F7578A0A4F96Be287861',
            ownerPrivateKey:  process.env.OWNER_PRIVATE_KEY,
            tokens: {
                USDC: {
                    address: '0x4C2AA252BEe766D3399850569713b55178934849',
                    donor: '0x3784Fe4C992871AdCC85dfee2B593bA3253Acc79'
                }
            }
        },
    }
} as const

export type ChainConfig = {
    chainId: number
    url: string
    createFork?: boolean
    limitOrderProtocol: string
    wrappedNative: string
    tokens: Record<string, {address: string; decimals: number}>
    ownerPrivateKey: string
}
