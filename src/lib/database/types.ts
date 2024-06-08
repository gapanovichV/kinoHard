export interface UserCreateParams {
  id: number
  first_name?: string
  last_name?: string
  username?: string
  language_code?: string
  is_premium?: boolean
}

export interface StatusResponse {
  status: Status
  data?: any
}

export enum Status {
  Success = "success",
  Error = "error"
}
