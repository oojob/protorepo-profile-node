// package: profile
// file: services/profile/service.proto

import * as jspb from "google-protobuf";
import * as github_com_oojob_protobuf_system_pb from "@oojob/oojob-protobuf/system_pb";
import * as github_com_oojob_protobuf_metadata_pb from "@oojob/oojob-protobuf/metadata_pb";
import * as github_com_oojob_protobuf_place_pb from "@oojob/oojob-protobuf/place_pb";
import * as github_com_oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Education extends jspb.Message {
  getEducation(): string;
  setEducation(value: string): void;

  getShow(): boolean;
  setShow(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Education.AsObject;
  static toObject(includeInstance: boolean, msg: Education): Education.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Education, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Education;
  static deserializeBinaryFromReader(message: Education, reader: jspb.BinaryReader): Education;
}

export namespace Education {
  export type AsObject = {
    education: string,
    show: boolean,
  }
}

export class ProfileSecurity extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  getPasswordSalt(): string;
  setPasswordSalt(value: string): void;

  getPasswordHash(): string;
  setPasswordHash(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getCodeType(): string;
  setCodeType(value: string): void;

  getAccountType(): ProfileSecurity.AccountTypeMap[keyof ProfileSecurity.AccountTypeMap];
  setAccountType(value: ProfileSecurity.AccountTypeMap[keyof ProfileSecurity.AccountTypeMap]): void;

  getVerified(): boolean;
  setVerified(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileSecurity.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileSecurity): ProfileSecurity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileSecurity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileSecurity;
  static deserializeBinaryFromReader(message: ProfileSecurity, reader: jspb.BinaryReader): ProfileSecurity;
}

export namespace ProfileSecurity {
  export type AsObject = {
    password: string,
    passwordSalt: string,
    passwordHash: string,
    code: string,
    codeType: string,
    accountType: ProfileSecurity.AccountTypeMap[keyof ProfileSecurity.AccountTypeMap],
    verified: boolean,
  }

  export interface AccountTypeMap {
    BASE: 0;
    COMPANY: 1;
    FUNDING: 2;
    JOB: 3;
  }

  export const AccountType: AccountTypeMap;
}

export class Profile extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasIdentity(): boolean;
  clearIdentity(): void;
  getIdentity(): github_com_oojob_protobuf_system_pb.Identifier | undefined;
  setIdentity(value?: github_com_oojob_protobuf_system_pb.Identifier): void;

  getGivenName(): string;
  setGivenName(value: string): void;

  getMiddleName(): string;
  setMiddleName(value: string): void;

  getFamilyName(): string;
  setFamilyName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): github_com_oojob_protobuf_system_pb.Email | undefined;
  setEmail(value?: github_com_oojob_protobuf_system_pb.Email): void;

  getGender(): string;
  setGender(value: string): void;

  hasBirthdate(): boolean;
  clearBirthdate(): void;
  getBirthdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCurrentPosition(): string;
  setCurrentPosition(value: string): void;

  hasEducation(): boolean;
  clearEducation(): void;
  getEducation(): Education | undefined;
  setEducation(value?: Education): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): github_com_oojob_protobuf_place_pb.Address | undefined;
  setAddress(value?: github_com_oojob_protobuf_place_pb.Address): void;

  hasSecurity(): boolean;
  clearSecurity(): void;
  getSecurity(): ProfileSecurity | undefined;
  setSecurity(value?: ProfileSecurity): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): github_com_oojob_protobuf_metadata_pb.Metadata | undefined;
  setMetadata(value?: github_com_oojob_protobuf_metadata_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    id: string,
    identity?: github_com_oojob_protobuf_system_pb.Identifier.AsObject,
    givenName: string,
    middleName: string,
    familyName: string,
    username: string,
    email?: github_com_oojob_protobuf_system_pb.Email.AsObject,
    gender: string,
    birthdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    currentPosition: string,
    education?: Education.AsObject,
    address?: github_com_oojob_protobuf_place_pb.Address.AsObject,
    security?: ProfileSecurity.AsObject,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }
}

export class ConfirmProfileRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmProfileRequest): ConfirmProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmProfileRequest;
  static deserializeBinaryFromReader(message: ConfirmProfileRequest, reader: jspb.BinaryReader): ConfirmProfileRequest;
}

export namespace ConfirmProfileRequest {
  export type AsObject = {
    username: string,
    email: string,
    token: string,
  }
}

export class ReadProfileRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadProfileRequest): ReadProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadProfileRequest;
  static deserializeBinaryFromReader(message: ReadProfileRequest, reader: jspb.BinaryReader): ReadProfileRequest;
}

export namespace ReadProfileRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class ValidateUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateUsernameRequest): ValidateUsernameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateUsernameRequest;
  static deserializeBinaryFromReader(message: ValidateUsernameRequest, reader: jspb.BinaryReader): ValidateUsernameRequest;
}

export namespace ValidateUsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class ValidateEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateEmailRequest): ValidateEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateEmailRequest;
  static deserializeBinaryFromReader(message: ValidateEmailRequest, reader: jspb.BinaryReader): ValidateEmailRequest;
}

export namespace ValidateEmailRequest {
  export type AsObject = {
    email: string,
  }
}

export class AuthResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getValid(): boolean;
  setValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    token: string,
    valid: boolean,
  }
}

export class AuthRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequest;
  static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

