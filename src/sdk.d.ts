export interface TokenDATA {
  ip: string | string[];
  useruuid: string;
}

export interface User {
  QQid: number;
  score: number;
  sign_Date: string;
  dayN: number;
  ban: number;
}

export interface GameUser {
  QQid: number;
  type: number;
  allow: number;
  bulletN: number;
  timeout?: number;
}

export enum errorcode {
  success = 200,
  data_error,
  things_career_error,
  not_found_things,
  score_less,
  career_mismatch,
  flycraft_flying,
  user_not_have_flycraft,
  revocation_flight_permit,
  user_isnot_flight_permit,
  flycraft_isnot_flying,
  flying_less,
  buttle_less,
  transmit_speed_more_timeout,
  authorization_error = 403,
  notfound,
  unknown_error,
  database_error,
  database_error_parameter_error = 40601,
}

export interface Flying {
  QQid: number;
  type: number;
  timestamp: number;
}

export interface TransmitRes {
  /**fly和gan为false时表示被摧毁 */
  fly: boolean;
  gan: boolean;
  score: number;
  fly_master_uin: number;
  fly_flying_time: number;
}