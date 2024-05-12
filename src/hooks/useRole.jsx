import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRole } from "../Utils/user";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loader } = useAuth();
  const {
    data: role,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => await getRole(user?.email),
    enabled: !loader && !!user?.email,
  });
  return [role?.data?.role, isLoading, refetch];
};

export default useRole;
