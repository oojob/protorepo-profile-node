// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Created on Sun Apr 28 2020
//
// Profile related messages.
// This file is resposible for all operation related to profile.
//
// @author nirajgeorgian@oojob.io (Niraj Kishore)
//
// Copyright (c) 2020 - oojobs
'use strict';
var grpc = require('grpc');
var services_profile_service_pb = require('./service_pb.js');
var github_com_oojob_protobuf_system_pb = require('@oojob/oojob-protobuf/system_pb.js');
var github_com_oojob_protobuf_metadata_pb = require('@oojob/oojob-protobuf/metadata_pb.js');
var github_com_oojob_protobuf_place_pb = require('@oojob/oojob-protobuf/place_pb.js');
var github_com_oojob_protobuf_health_pb = require('@oojob/oojob-protobuf/health_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_github_com_oojob_protobuf_DefaultResponse(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_system_pb.DefaultResponse)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.DefaultResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_DefaultResponse(buffer_arg) {
  return github_com_oojob_protobuf_system_pb.DefaultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_HealthCheckRequest(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckRequest(buffer_arg) {
  return github_com_oojob_protobuf_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_HealthCheckResponse(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckResponse(buffer_arg) {
  return github_com_oojob_protobuf_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_ConfirmProfileRequest(arg) {
  if (!(arg instanceof services_profile_service_pb.ConfirmProfileRequest)) {
    throw new Error('Expected argument of type profile.ConfirmProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_profile_ConfirmProfileRequest(buffer_arg) {
  return services_profile_service_pb.ConfirmProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_Profile(arg) {
  if (!(arg instanceof services_profile_service_pb.Profile)) {
    throw new Error('Expected argument of type profile.Profile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_profile_Profile(buffer_arg) {
  return services_profile_service_pb.Profile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_ReadProfileRequest(arg) {
  if (!(arg instanceof services_profile_service_pb.ReadProfileRequest)) {
    throw new Error('Expected argument of type profile.ReadProfileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_profile_ReadProfileRequest(buffer_arg) {
  return services_profile_service_pb.ReadProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_ValidateEmailRequest(arg) {
  if (!(arg instanceof services_profile_service_pb.ValidateEmailRequest)) {
    throw new Error('Expected argument of type profile.ValidateEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_profile_ValidateEmailRequest(buffer_arg) {
  return services_profile_service_pb.ValidateEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_ValidateUsernameRequest(arg) {
  if (!(arg instanceof services_profile_service_pb.ValidateUsernameRequest)) {
    throw new Error('Expected argument of type profile.ValidateUsernameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_profile_ValidateUsernameRequest(buffer_arg) {
  return services_profile_service_pb.ValidateUsernameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// ProfileService responsible for profile microservice operation.
// more info can be found at : https://github.com/oojob/service-profile
// project: github.com/oojob
// how does this profile service work as a full microservice
// - we need to create profile or in other term's signup
// - then we can login to view profile and then perform profile operation
var ProfileServiceService = exports.ProfileServiceService = {
  // / ProfileService CreateProfile :- help's uo to create a profile
  createProfile: {
    path: '/profile.ProfileService/CreateProfile',
    requestStream: false,
    responseStream: false,
    requestType: services_profile_service_pb.Profile,
    responseType: services_profile_service_pb.Profile,
    requestSerialize: serialize_profile_Profile,
    requestDeserialize: deserialize_profile_Profile,
    responseSerialize: serialize_profile_Profile,
    responseDeserialize: deserialize_profile_Profile,
  },
  // / ProfileService ConfirmProfile :- help's us to verify the profile
  confirmProfile: {
    path: '/profile.ProfileService/ConfirmProfile',
    requestStream: false,
    responseStream: false,
    requestType: services_profile_service_pb.ConfirmProfileRequest,
    responseType: github_com_oojob_protobuf_system_pb.DefaultResponse,
    requestSerialize: serialize_profile_ConfirmProfileRequest,
    requestDeserialize: deserialize_profile_ConfirmProfileRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_DefaultResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_DefaultResponse,
  },
  // / ProfileService ReadProfile :- help's us to read the entire profile data
  readProfile: {
    path: '/profile.ProfileService/ReadProfile',
    requestStream: false,
    responseStream: false,
    requestType: services_profile_service_pb.ReadProfileRequest,
    responseType: services_profile_service_pb.Profile,
    requestSerialize: serialize_profile_ReadProfileRequest,
    requestDeserialize: deserialize_profile_ReadProfileRequest,
    responseSerialize: serialize_profile_Profile,
    responseDeserialize: deserialize_profile_Profile,
  },
  // / ProfileService UpdateProfile :- help's us to update the profile
  updateProfile: {
    path: '/profile.ProfileService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: services_profile_service_pb.Profile,
    responseType: services_profile_service_pb.Profile,
    requestSerialize: serialize_profile_Profile,
    requestDeserialize: deserialize_profile_Profile,
    responseSerialize: serialize_profile_Profile,
    responseDeserialize: deserialize_profile_Profile,
  },
  // / ProfileService  ValidateUsername :- help's us to validate username
  // / availability
  validateUsername: {
    path: '/profile.ProfileService/ValidateUsername',
    requestStream: false,
    responseStream: false,
    requestType: services_profile_service_pb.ValidateUsernameRequest,
    responseType: github_com_oojob_protobuf_system_pb.DefaultResponse,
    requestSerialize: serialize_profile_ValidateUsernameRequest,
    requestDeserialize: deserialize_profile_ValidateUsernameRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_DefaultResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_DefaultResponse,
  },
  // / ProfileService ValidateEmail :- help's us to validate email availability
  validateEmail: {
    path: '/profile.ProfileService/ValidateEmail',
    requestStream: false,
    responseStream: false,
    requestType: services_profile_service_pb.ValidateEmailRequest,
    responseType: github_com_oojob_protobuf_system_pb.DefaultResponse,
    requestSerialize: serialize_profile_ValidateEmailRequest,
    requestDeserialize: deserialize_profile_ValidateEmailRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_DefaultResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_DefaultResponse,
  },
  // / Used to check health status of the running microservice
  check: {
    path: '/profile.ProfileService/Check',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: github_com_oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
  // / Used to check health status of the running microservice as stream
  watch: {
    path: '/profile.ProfileService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: github_com_oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: github_com_oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
};

exports.ProfileServiceClient = grpc.makeGenericClientConstructor(ProfileServiceService);
