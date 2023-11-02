# Forge Token Price Subgraph

Subgraph for Forge token OHLCV data on Evmos network.

## Entities

The subgraph defines the following entities:

- Swap
- LastCandle

## Swap

Each swap event is recorded with the following properties:

- id
- pool
- token0
- token1
- amount0
- amount1
- blockNumber
- blockTimestamp
- transactionHash

## Candle

Each Candle entity represents a candle for a specific token pair and duration with the following properties:

- id
- token0
- token1
- duration
- timestamp
- open
- close
- low
- high


## LastCandle

Each LastCandle entity represents the last candle for a specific token pair and duration with the following properties:

- id
- token0
- token1
- duration
- timestamp
- open
- close
- low
- high

## Getting Started

To deploy the subgraph, follow these steps:

1. Clone the repository
2. Install dependencies with `yarn install`
3. Generate code with `yarn codegen`
4. Build the subgraph with `yarn build`
5. Deploy the subgraph with `DEPLOY_KEY=XXX yarn deploy`
