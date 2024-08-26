import { useRouter } from "next/navigation"
import { toast } from "sonner"


export const useAuth = () => {
  const router = useRouter()
  const signOut = async () => {
      try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,{
              method: "post",
              credentials: "include",
              headers:{
                  'Content-Type': 'application/json',
              },
          }
      )

      if(!res.ok) throw new Error()
      toast.success("User signed out successfully")
      router.push('/sign-in')
      router.refresh()
      } catch (error) {
          toast.error("Not able to sign out, please try again later.")
      }
  }
  return {signOut}
}