import { ApiErrorProps } from "@/src/types/ApiError.types";

export function isApiError(error: unknown): error is ApiErrorProps {
  return (error as ApiErrorProps).response?.data?.message !== undefined;
}