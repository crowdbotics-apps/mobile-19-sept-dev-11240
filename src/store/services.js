import axios from "axios"
import { NEW_CONNECTOR_GFGFGHF_TOKEN } from "react-native-dotenv"
const newPluginXXXX = axios.create({
  baseURL: "https://a.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectorgfgfghf = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11240/storyboard/10919/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${NEW_CONNECTOR_GFGFGHF_TOKEN}`
  }
})
const mobile19septAPI = axios.create({
  baseURL: "https://mobile-19-sept-dev-11240-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return mobile19septAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return mobile19septAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return mobile19septAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return mobile19septAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_hhgjhg_list() {
  return mobile19septAPI.get(`/api/v1/hhgjhg/`)
}
function api_v1_hhgjhg_create(requestBody) {
  return mobile19septAPI.post(`/api/v1/hhgjhg/`, requestBody)
}
function api_v1_hhgjhg_read() {
  return mobile19septAPI.get(`/api/v1/hhgjhg/{id}/`)
}
function api_v1_hhgjhg_update(requestBody) {
  return mobile19septAPI.put(`/api/v1/hhgjhg/{id}/`, requestBody)
}
function api_v1_hhgjhg_partial_update(requestBody) {
  return mobile19septAPI.patch(`/api/v1/hhgjhg/{id}/`, requestBody)
}
function api_v1_hhgjhg_delete() {
  return mobile19septAPI.delete(`/api/v1/hhgjhg/{id}/`)
}
function api_v1_homepage_list() {
  return mobile19septAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return mobile19septAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return mobile19septAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return mobile19septAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return mobile19septAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return mobile19septAPI.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return mobile19septAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return mobile19septAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return mobile19septAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return mobile19septAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return mobile19septAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return mobile19septAPI.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return mobile19septAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return mobile19septAPI.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return mobile19septAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return mobile19septAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return mobile19septAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_hhgjhg_list,
  api_v1_hhgjhg_create,
  api_v1_hhgjhg_read,
  api_v1_hhgjhg_update,
  api_v1_hhgjhg_partial_update,
  api_v1_hhgjhg_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
