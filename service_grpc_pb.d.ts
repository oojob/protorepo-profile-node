// GENERATED CODE -- DO NOT EDIT!

// package: profile
// file: services/profile/service.proto

import * as services_profile_service_pb from "./service_pb";
import * as github_com_oojob_protobuf_system_pb from "@oojob/oojob-protobuf/system_pb";
import * as github_com_oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as grpc from "grpc";

interface IProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  auth: grpc.MethodDefinition<services_profile_service_pb.AuthReq, services_profile_service_pb.AuthRes>;
  createProfile: grpc.MethodDefinition<services_profile_service_pb.Profile, github_com_oojob_protobuf_system_pb.Id>;
  confirmProfile: grpc.MethodDefinition<services_profile_service_pb.ConfirmProfileRequest, github_com_oojob_protobuf_system_pb.DefaultResponse>;
  readProfile: grpc.MethodDefinition<services_profile_service_pb.ReadProfileRequest, services_profile_service_pb.Profile>;
  updateProfile: grpc.MethodDefinition<services_profile_service_pb.Profile, github_com_oojob_protobuf_system_pb.Id>;
  validateUsername: grpc.MethodDefinition<services_profile_service_pb.ValidateUsernameRequest, github_com_oojob_protobuf_system_pb.DefaultResponse>;
  validateEmail: grpc.MethodDefinition<services_profile_service_pb.ValidateEmailRequest, github_com_oojob_protobuf_system_pb.DefaultResponse>;
  check: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const ProfileServiceService: IProfileServiceService;

export class ProfileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  auth(argument: services_profile_service_pb.AuthReq, callback: grpc.requestCallback<services_profile_service_pb.AuthRes>): grpc.ClientUnaryCall;
  auth(argument: services_profile_service_pb.AuthReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_profile_service_pb.AuthRes>): grpc.ClientUnaryCall;
  auth(argument: services_profile_service_pb.AuthReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_profile_service_pb.AuthRes>): grpc.ClientUnaryCall;
  createProfile(argument: services_profile_service_pb.Profile, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  createProfile(argument: services_profile_service_pb.Profile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  createProfile(argument: services_profile_service_pb.Profile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  confirmProfile(argument: services_profile_service_pb.ConfirmProfileRequest, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  confirmProfile(argument: services_profile_service_pb.ConfirmProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  confirmProfile(argument: services_profile_service_pb.ConfirmProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  readProfile(argument: services_profile_service_pb.ReadProfileRequest, callback: grpc.requestCallback<services_profile_service_pb.Profile>): grpc.ClientUnaryCall;
  readProfile(argument: services_profile_service_pb.ReadProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_profile_service_pb.Profile>): grpc.ClientUnaryCall;
  readProfile(argument: services_profile_service_pb.ReadProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_profile_service_pb.Profile>): grpc.ClientUnaryCall;
  updateProfile(argument: services_profile_service_pb.Profile, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  updateProfile(argument: services_profile_service_pb.Profile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  updateProfile(argument: services_profile_service_pb.Profile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  validateUsername(argument: services_profile_service_pb.ValidateUsernameRequest, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  validateUsername(argument: services_profile_service_pb.ValidateUsernameRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  validateUsername(argument: services_profile_service_pb.ValidateUsernameRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  validateEmail(argument: services_profile_service_pb.ValidateEmailRequest, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  validateEmail(argument: services_profile_service_pb.ValidateEmailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  validateEmail(argument: services_profile_service_pb.ValidateEmailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}
