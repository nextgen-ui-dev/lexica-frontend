import { getServerSession } from "next-auth";
import { authOption } from "../utils/authOption";

export async function getSession() {
    return await getServerSession(authOption)
}

export default async function getCurrentUser() {
    const session = await getSession();
    return {
        ...session,
    }
}