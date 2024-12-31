import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenu = () => {
  const {
    isPending,
    error,
    data: menu = [],
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axios.get("../../public/menu.json");

      return response.data;
    },
  });

  if (isPending) return "Loading";
  if (error) {
    return "An error has occurered: " + error.message;
  }
  return [isPending, error, menu];
};

export default useMenu;
