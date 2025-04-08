import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const {
    mutate: creatinCabin,
    isLoading: isCreating,
    reset,
  } = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: () => {
      toast.error("Some went wrong with creating");
    },
  });

  return { creatinCabin, isCreating };
}
