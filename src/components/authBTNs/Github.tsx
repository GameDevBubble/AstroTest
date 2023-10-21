import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { Button } from '../ui/button';

const GitHubLoginButton = () => {
  return (
    <Button variant={"default"} className="text-white font-bold space-x-2">
      <FaGithub />
      <span>GitHub SSO</span>
    </Button>
  );
};

export default GitHubLoginButton;
