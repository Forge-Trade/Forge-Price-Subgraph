// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Pool extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Pool must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Pool", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Pool | null {
    return changetype<Pool | null>(store.get("Pool", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value!.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    return value!.toBytes();
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    return value!.toBytes();
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get fee(): i32 {
    let value = this.get("fee");
    return value!.toI32();
  }

  set fee(value: i32) {
    this.set("fee", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Swap extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Swap must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Swap", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Swap | null {
    return changetype<Swap | null>(store.get("Swap", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value!.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    return value!.toBytes();
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    return value!.toBytes();
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get amount0(): BigInt {
    let value = this.get("amount0");
    return value!.toBigInt();
  }

  set amount0(value: BigInt) {
    this.set("amount0", Value.fromBigInt(value));
  }

  get amount1(): BigInt {
    let value = this.get("amount1");
    return value!.toBigInt();
  }

  set amount1(value: BigInt) {
    this.set("amount1", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Candle extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Candle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Candle must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Candle", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Candle | null {
    return changetype<Candle | null>(store.get("Candle", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    return value!.toBytes();
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    return value!.toBytes();
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value!.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get open0(): BigInt {
    let value = this.get("open0");
    return value!.toBigInt();
  }

  set open0(value: BigInt) {
    this.set("open0", Value.fromBigInt(value));
  }

  get open1(): BigInt {
    let value = this.get("open1");
    return value!.toBigInt();
  }

  set open1(value: BigInt) {
    this.set("open1", Value.fromBigInt(value));
  }

  get close0(): BigInt {
    let value = this.get("close0");
    return value!.toBigInt();
  }

  set close0(value: BigInt) {
    this.set("close0", Value.fromBigInt(value));
  }

  get close1(): BigInt {
    let value = this.get("close1");
    return value!.toBigInt();
  }

  set close1(value: BigInt) {
    this.set("close1", Value.fromBigInt(value));
  }

  get high0(): BigInt {
    let value = this.get("high0");
    return value!.toBigInt();
  }

  set high0(value: BigInt) {
    this.set("high0", Value.fromBigInt(value));
  }

  get high1(): BigInt {
    let value = this.get("high1");
    return value!.toBigInt();
  }

  set high1(value: BigInt) {
    this.set("high1", Value.fromBigInt(value));
  }

  get low0(): BigInt {
    let value = this.get("low0");
    return value!.toBigInt();
  }

  set low0(value: BigInt) {
    this.set("low0", Value.fromBigInt(value));
  }

  get low1(): BigInt {
    let value = this.get("low1");
    return value!.toBigInt();
  }

  set low1(value: BigInt) {
    this.set("low1", Value.fromBigInt(value));
  }
}

export class LastCandle extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LastCandle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type LastCandle must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LastCandle", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): LastCandle | null {
    return changetype<LastCandle | null>(
      store.get("LastCandle", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    return value!.toBytes();
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    return value!.toBytes();
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value!.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get open0(): BigInt {
    let value = this.get("open0");
    return value!.toBigInt();
  }

  set open0(value: BigInt) {
    this.set("open0", Value.fromBigInt(value));
  }

  get open1(): BigInt {
    let value = this.get("open1");
    return value!.toBigInt();
  }

  set open1(value: BigInt) {
    this.set("open1", Value.fromBigInt(value));
  }

  get close0(): BigInt {
    let value = this.get("close0");
    return value!.toBigInt();
  }

  set close0(value: BigInt) {
    this.set("close0", Value.fromBigInt(value));
  }

  get close1(): BigInt {
    let value = this.get("close1");
    return value!.toBigInt();
  }

  set close1(value: BigInt) {
    this.set("close1", Value.fromBigInt(value));
  }

  get high0(): BigInt {
    let value = this.get("high0");
    return value!.toBigInt();
  }

  set high0(value: BigInt) {
    this.set("high0", Value.fromBigInt(value));
  }

  get high1(): BigInt {
    let value = this.get("high1");
    return value!.toBigInt();
  }

  set high1(value: BigInt) {
    this.set("high1", Value.fromBigInt(value));
  }

  get low0(): BigInt {
    let value = this.get("low0");
    return value!.toBigInt();
  }

  set low0(value: BigInt) {
    this.set("low0", Value.fromBigInt(value));
  }

  get low1(): BigInt {
    let value = this.get("low1");
    return value!.toBigInt();
  }

  set low1(value: BigInt) {
    this.set("low1", Value.fromBigInt(value));
  }
}
