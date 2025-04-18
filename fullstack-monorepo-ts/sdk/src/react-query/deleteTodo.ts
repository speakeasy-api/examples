/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AcmeTodoApiCore } from "../core.js";
import { deleteTodo } from "../funcs/deleteTodo.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAcmeTodoApiContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type DeleteTodoMutationVariables = {
  request: operations.DeleteTodoRequest;
  options?: RequestOptions;
};

export type DeleteTodoMutationData = components.Todo;

/**
 * Delete a todo item
 */
export function useDeleteTodoMutation(
  options?: MutationHookOptions<
    DeleteTodoMutationData,
    Error,
    DeleteTodoMutationVariables
  >,
): UseMutationResult<
  DeleteTodoMutationData,
  Error,
  DeleteTodoMutationVariables
> {
  const client = useAcmeTodoApiContext();
  return useMutation({
    ...buildDeleteTodoMutation(client, options),
    ...options,
  });
}

export function mutationKeyDeleteTodo(): MutationKey {
  return ["@acme/todo-sdk", "deleteTodo"];
}

export function buildDeleteTodoMutation(
  client$: AcmeTodoApiCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: DeleteTodoMutationVariables,
  ) => Promise<DeleteTodoMutationData>;
} {
  return {
    mutationKey: mutationKeyDeleteTodo(),
    mutationFn: function deleteTodoMutationFn({
      request,
      options,
    }): Promise<DeleteTodoMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(deleteTodo(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
