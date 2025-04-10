import { useMutation } from "@tanstack/react-query";
import { sigup as signAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signAPI,
    onSuccess: (data) => {
      toast.success(`Welcome ${data.user.email} to the oasis`);
      navigate("/");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return { signup, isLoading };
}
