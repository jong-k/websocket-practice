import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-xl">
        <Card>
          <CardHeader>
            <CardTitle>Simple Chat</CardTitle>
            <CardDescription>지금 실시간으로 연결되어 보세요</CardDescription>
            <CardAction>
              <Button className="cursor-pointer" variant="outline" size="sm">
                <RefreshCcw />
                초기화
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
