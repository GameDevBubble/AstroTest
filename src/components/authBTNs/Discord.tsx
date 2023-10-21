import React from 'react';
import { Button } from '../ui/button';
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord"

const DiscordLoginButton = () => {
  return (
    <Button variant={"default"} className="text-white font-bold space-x-2">
        <FaDiscord size={20}/>
        <span>Discord OAuth</span>
    </Button>
  );
};

export default DiscordLoginButton;
