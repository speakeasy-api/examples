/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersCreateUser } from "../funcs/usersCreateUser.js";
import { usersGetUser } from "../funcs/usersGetUser.js";
import { usersGetUsers } from "../funcs/usersGetUsers.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Users extends ClientSDK {
  async getUsers(
    options?: RequestOptions,
  ): Promise<Array<models.UserSelect>> {
    return unwrapAsync(usersGetUsers(
      this,
      options,
    ));
  }

  async createUser(
    request: models.UserInsert,
    options?: RequestOptions,
  ): Promise<models.UserSelect> {
    return unwrapAsync(usersCreateUser(
      this,
      request,
      options,
    ));
  }

  async getUser(
    request: operations.GetUserRequest,
    options?: RequestOptions,
  ): Promise<models.UserSelect> {
    return unwrapAsync(usersGetUser(
      this,
      request,
      options,
    ));
  }
}
