import Navbar from "@/components/shared/Navbar"
import { ChildProps } from "@/types"
import  Sidebar  from "@/components/shared/Sidebar"

const AuthLayout = ({ children }: ChildProps) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-40 w-screen h-screen bg-black/50" />
            <Navbar />
            <Sidebar />
            <main className="flex items-center justify-center w-full h-[90vh] z-50 relative">
                {children}
            </main>
        </div>
    )
}

export default AuthLayout