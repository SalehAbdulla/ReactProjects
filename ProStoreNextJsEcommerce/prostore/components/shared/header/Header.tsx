import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  
  return (
    <header className="w-full border-b">

      <div className="wrapper flex-between">
        
        <div className="flex-start">

          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              width={48}
              height={48}
              alt="logo-img"
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>

        </div>

        <div className="flex-start">
          <div className="space-x-2">
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
          </div>

          <div className="space-x-2">
            <Button asChild variant="ghost">
              <Link href="/sign-in">
                <UserIcon /> Sign in
              </Link>
            </Button>
          </div>
        </div>


      </div>
    </header>
  );
};

export default Header;
