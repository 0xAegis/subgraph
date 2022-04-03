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

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("isPaid", Value.fromBoolean(false));
    this.set("text", Value.fromString(""));
    this.set("attachments", Value.fromStringArray(new Array(0)));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("author", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Post must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isPaid(): boolean {
    let value = this.get("isPaid");
    return value!.toBoolean();
  }

  set isPaid(value: boolean) {
    this.set("isPaid", Value.fromBoolean(value));
  }

  get text(): string {
    let value = this.get("text");
    return value!.toString();
  }

  set text(value: string) {
    this.set("text", Value.fromString(value));
  }

  get attachments(): Array<string> {
    let value = this.get("attachments");
    return value!.toStringArray();
  }

  set attachments(value: Array<string>) {
    this.set("attachments", Value.fromStringArray(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get author(): string {
    let value = this.get("author");
    return value!.toString();
  }

  set author(value: string) {
    this.set("author", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("arcanaPublicKey", Value.fromString(""));
    this.set("nftAddress", Value.fromBytes(Bytes.empty()));
    this.set("nftsMinted", Value.fromI32(0));
    this.set("numPosts", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get arcanaPublicKey(): string {
    let value = this.get("arcanaPublicKey");
    return value!.toString();
  }

  set arcanaPublicKey(value: string) {
    this.set("arcanaPublicKey", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    return value!.toBytes();
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get nftsMinted(): i32 {
    let value = this.get("nftsMinted");
    return value!.toI32();
  }

  set nftsMinted(value: i32) {
    this.set("nftsMinted", Value.fromI32(value));
  }

  get numPosts(): i32 {
    let value = this.get("numPosts");
    return value!.toI32();
  }

  set numPosts(value: i32) {
    this.set("numPosts", Value.fromI32(value));
  }

  get posts(): Array<string> {
    let value = this.get("posts");
    return value!.toStringArray();
  }

  set posts(value: Array<string>) {
    this.set("posts", Value.fromStringArray(value));
  }

  get followers(): Array<string> {
    let value = this.get("followers");
    return value!.toStringArray();
  }

  set followers(value: Array<string>) {
    this.set("followers", Value.fromStringArray(value));
  }

  get following(): Array<string> {
    let value = this.get("following");
    return value!.toStringArray();
  }

  set following(value: Array<string>) {
    this.set("following", Value.fromStringArray(value));
  }
}

export class Follow extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("follower", Value.fromString(""));
    this.set("followed", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Follow entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Follow must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Follow", id.toString(), this);
    }
  }

  static load(id: string): Follow | null {
    return changetype<Follow | null>(store.get("Follow", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get follower(): string {
    let value = this.get("follower");
    return value!.toString();
  }

  set follower(value: string) {
    this.set("follower", Value.fromString(value));
  }

  get followed(): string {
    let value = this.get("followed");
    return value!.toString();
  }

  set followed(value: string) {
    this.set("followed", Value.fromString(value));
  }
}
