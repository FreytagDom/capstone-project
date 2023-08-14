import { useSession } from "next-auth/react";


export default function UserMail() {
const {data: session} = useSession();
const userMail = session.user.email;
return userMail;
}
