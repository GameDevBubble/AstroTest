import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { FormInput } from "lucide-react"
import { Image } from "astro:assets"
import favicon from "../assets/favicon.svg"
import GitHubLoginButton from "../components/authBTNs/Github.tsx"
import DiscordLoginButton from "./authBTNs/Discord.tsx"
import { Separator } from "@/components/ui/separator"
import { account } from "@/lib/appwrite"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import "@/styles/globals.css"

export function Auth() {

  const requiredFields : string[] = ["customUserId", "email", "password", "passwordRetype", "username"];
  const [isAlertDialogOpen, setAlertDialogOpen] = useState(false);

  type signUpData = {
    customUserId: string;
    email: string;
    password: string;
    passwordRetype: string;
    Username: string;
    [key: string]: string; 
  };

  const [signUpData, setSignUpData] = useState<signUpData>({
    customUserId: "", // Custom user ID
    email: "",
    password: "",
    passwordRetype: "",
    Username: "",
  });

  const handleSignUp = () => {

    // Check if any required field is missing
    const missingFields = requiredFields.filter((field) => !signUpData[field]);

    if (missingFields.length > 0) {
      // Show the AlertDialog with the list of missing fields
      setAlertDialogOpen(true);
      setAlertDialogMessage(`Please fill in the following fields: ${missingFields.join(", ")}`);
    } else {
      // Proceed with form submission
      // Your form submission logic here
    }
  };

  const [alertDialogMessage, setAlertDialogMessage] = useState("");

  const closeAlertDialog = () => {
    setAlertDialogOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
      </div>

      <div className="flex flex-col items-center justify-center h-screen space-y-8">


      <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="200" height="200px" viewBox="0 0 544.337 639.283">
          <g className="fill-primary" id="Screenshot-2023-10-18-213707" transform="translate(-78.5 326.647)">
            <path className="fill-primary" id="Path_1" data-name="Path 1" d="M149.7-273.6c-46.7,13.3-73.945,66.81-58.053,113.512,15.243,44.756,67.459,68.756,112.215,51.891,43.459-16.54,66.161-61.621,53.189-105.729-4.216-14.594-9.081-22.378-22.378-35.675C210.674-273.6,179.863-282.36,149.7-273.6Z" transform="translate(19.284)" />
            <path className="fill-primary" id="Path_3" data-name="Path 3" d="M166.067-200.542c-24.648,6.162-40.54,15.567-58.7,34.7C79.8-136.651,78.5-129.84,78.5-29.949V56l84,.973c65.188.649,84.648-.324,86.918-3.243,1.3-2.27,2.595-20.432,2.595-39.891,0-54.81,9.081-84.972,36-120.323,7.135-9.081,12.648-19.459,12.648-23.027,0-9.081-17.838-34.7-33.405-48C242.282-198.92,198.174-208.974,166.067-200.542Z" transform="translate(0 164.665)" />
            <path className="fill-primary" id="Path_4" data-name="Path 4" d="M219.585-166.811c-26.27,12.973-49.945,36.648-59.351,60.972C153.1-88.326,152.451-81.515,151.478-4c-.973,69.08-.324,83.35,3.568,86.594,3.568,2.919,33.405,3.892,116.107,3.243l111.566-.973V-93.515L373.638-112c-10.378-21.081-33.729-43.783-56.756-55.134-12-5.838-21.729-7.784-46.054-8.432C242.288-176.541,238.72-175.892,219.585-166.811Z" transform="translate(162.803 226.609)" />
            <path className="fill-primary" id="Path_18" data-name="Path 18" d="M149.21-274.517c-46.7,13.3-73.453,67.723-57.561,114.426,15.243,44.756,67.459,68.756,112.215,51.891,43.459-16.54,65.175-50.88,52.2-94.987-2.256-7.808-14.1-19.989-31.918-19.983-15.056.005-32.951.077-39.134-6.106C161.013-253.276,192.9-281.253,149.21-274.517Z" transform="translate(250.284 115)" />
          </g>
          <g className="fill-primary" id="_3" data-name="3" transform="translate(276.264 199.458)">
            <g className="fill-primary" id="Group_5" data-name="Group 5">
              <path className="fill-primary" id="Path_8" data-name="Path 8" d="M105.533-195.925c-4.1.971-9.061,4.315-12.728,8.737L90-183.844V-.685H239.827c2.675-71.447.647-108.406.647-167.733l12.081-.324,12.081-.324.647-3.128a30.086,30.086,0,0,0-.108-8.2c-.971-6.472-7.011-13.483-13.16-15.317C247.162-197.219,111.358-197.435,105.533-195.925Zm15.749,6.472c3.775,2.7,6.472,9.384,6.472,15.641v4.854h53.826c29.663,0,54.149.431,54.473.971.324.432-1.437,96.089.647,165.145H92.157V-180.5l2.481-3.56C101-193.444,112.436-195.709,121.281-189.453Zm132.569-2.373c5.609,2.8,7.982,6.8,8.521,14.238l.431,6.472-65.583-.216-65.691-.324-.647-5.393c-.755-6.148-3.344-11.758-5.933-13.268-5.609-3.128.324-3.452,62.455-3.452C245.005-193.768,250.506-193.66,253.85-191.826Z" stroke="fill-primary" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
            </g>
            <path className="fill-primary" id="Path_9" data-name="Path 9" d="M106-148.382c0,1.4,7.119,1.618,57.17,1.618s57.17-.216,57.17-1.618S213.22-150,163.17-150,106-149.784,106-148.382Z" transform="translate(1.259 3.694)" stroke="fill-primary" stroke-width="5" />
            <path className="fill-primary" id="Path_10" data-name="Path 10" d="M106-133.921c0,.755,15.856,1.079,45.3,1.079s45.3-.324,45.3-1.079S180.752-135,151.3-135,106-134.676,106-133.921Z" transform="translate(1.259 4.874)" stroke="fill-primary" stroke-width="5" />
            <path className="fill-primary" id="Path_11" data-name="Path 11" d="M106-133.921c0,.755,15.856,1.079,45.3,1.079s45.3-.324,45.3-1.079S180.752-135,151.3-135,106-134.676,106-133.921Z" transform="translate(1.259 19.975)" stroke="fill-primary" stroke-width="5" />
            <path className="fill-primary" id="Path_12" data-name="Path 12" d="M106-133.921c0,.755,17.509,1.079,50.026,1.079s50.026-.324,50.026-1.079S188.543-135,156.026-135,106-134.676,106-133.921Z" transform="translate(1.259 38.348)" stroke="fill-primary" stroke-width="5" />
            <path className="fill-primary" id="Path_13" data-name="Path 13" d="M106-133.921c0,.755,13.053,1.079,37.293,1.079s37.293-.324,37.293-1.079S167.533-135,143.293-135,106-134.676,106-133.921Z" transform="translate(1.259 53.449)" stroke="fill-primary" stroke-width="5" />
            <path className="fill-primary" id="Path_14" data-name="Path 14" d="M106-134.219c0,.547,18.1.781,51.713.781s51.714-.234,51.714-.781-18.1-.781-51.714-.781S106-134.766,106-134.219Z" transform="translate(1.259 71.821)" stroke="fill-primary" stroke-width="5" />
            <path className="fill-primary" id="Path_15" data-name="Path 15" d="M106-133.921c0,.755,6.526,1.079,18.646,1.079s18.646-.324,18.646-1.079S136.767-135,124.646-135,106-134.676,106-133.921Z" transform="translate(1.259 106.547)" stroke="fill-primary" stroke-width="5" />
            <path className="fill-primary" id="Path_16" data-name="Path 16" d="M106-133.921c0,.755,15.477,1.079,44.221,1.079s44.221-.324,44.221-1.079S178.965-135,150.221-135,106-134.676,106-133.921Z" transform="translate(1.259 86.923)" stroke="fill-primary" stroke-width="5" />
            <path className="fill-primary" id="Path_17" data-name="Path 17" d="M106-133.921c0,.755,6.526,1.079,18.646,1.079s18.646-.324,18.646-1.079S136.767-135,124.646-135,106-134.676,106-133.921Z" transform="translate(58.428 107.626)" stroke="fill-primary" stroke-width="5" />
          </g>
        </svg>

        <Label className="font-bold text-lg">Project-Collaboration.de</Label>
        <Tabs defaultValue="signin" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">sign In</TabsTrigger>
            <TabsTrigger value="signup">sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle>Log In</CardTitle>
                <CardDescription>
                  sign in to your account to see all your projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">username</Label>
                  <Input required={true} id="Username" placeholder="Username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">password</Label>
                  <Input type="password" id="password" placeholder="**************" />
                </div>

                <div className="flex space-y-1 justify-between">
                <Button variant={"default"}>Forgot Password</Button>
                <Button variant={"default"}>Log In</Button>
                </div>
                <div className="flex space-x-4 space-y-4 items-center">
                  
                </div>
              </CardContent>
              <Separator className="mb-5" />
              <CardFooter className="flex justify-between">
                <GitHubLoginButton />
                <DiscordLoginButton />
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  sign up to create your account and start your projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="customUserId">UserID</Label>
                  <Input type="text" id="customUserId current" onChange={(e) => setSignUpData({ ...signUpData, customUserId: e.target.value })} placeholder="UID" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="text">password</Label>
                  <Input type="password" className="password" placeholder="at least 8 chars" onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}></Input>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="text">password retype</Label>
                  <Input type="password" className="password mb-5" placeholder="at least 8 chars" onChange={(e) => setSignUpData({ ...signUpData, passwordRetype: e.target.value })}></Input>
                </div>
                <div className="flex space-x-4 items-center justify-center">
                <Button variant={"default"} onClick={handleSignUp}>Sing Up for project collaboration</Button>
                </div>
              </CardContent>
              <Separator className="mb-5" />
              <CardFooter className="flex justify-between">
                <GitHubLoginButton />
                <DiscordLoginButton />
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <AlertDialog open={isAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Incomplete Form</AlertDialogTitle>
            <AlertDialogDescription>
              {alertDialogMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeAlertDialog}>OK</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}