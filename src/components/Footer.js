import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="bg-white h-20 relative">
      <div className="border-t border-gray-200" />
      <div className="h-full px-8 flex flex-col md:flex-row md:justify-between justify-center items-center">
        <div className="text-center md:text-left pb-2 md:pb-0">
          <p className="text-md ">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="fkex items-center justify-center">
          <div className="flex space-x-8">
            <Link href="#" className="text-md text-muted-foreground hover: ">
              Terms
            </Link>
            <Link href="#" className="text-md text-muted-foreground hover: ">
              Privacy Policy
            </Link>
            <Link href="#" className="text-md text-muted-foreground hover: ">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
