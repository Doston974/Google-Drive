import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // public routes  o'z nom bilan routlarni oublic qilib berish vazifasini bajaradi
    // publicRoutes: ['/'],
    // ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};