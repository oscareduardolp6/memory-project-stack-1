import { useNavigate } from "react-router-dom"
import { Paths } from "../Router/types"

export const useRedirect = () => {
  const navigate = useNavigate()
  const goTo = (path: Paths) => navigate(path)
  return goTo
}