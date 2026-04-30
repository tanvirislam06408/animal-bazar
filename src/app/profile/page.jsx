'use client'

import ProfileUpdate from "@/components/ProfileUpdate";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { AiOutlineMail } from "react-icons/ai";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    // const { name, email, image } = data;


    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <Avatar className="w-2xs h-72 rounded-full">
                <Avatar.Image alt="avatar"  src={user?.image} />
                <Avatar.Fallback>{session?.user?.name[0]}</Avatar.Fallback>
            </Avatar>
            <h1 className="text-xl font-medium mt-6">{user?.name}</h1>
            <p  className="mt-3 mb-4 text-gray-500 flex items-center gap-1.5"><AiOutlineMail />{user?.email}</p>
            <ProfileUpdate/>
        </div>
    );
};

export default ProfilePage;