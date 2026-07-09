import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Create an account to start buying and selling.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">I am a...</Label>
            <Select required>
                <SelectTrigger id="role">
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="seller">Seller</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full">Create Account</Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
