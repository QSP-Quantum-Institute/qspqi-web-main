import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AppRoutes } from "../../common/enums";
import { cn } from "../../utils";

const navigationItems = [{ path: AppRoutes.HOME, label: "Home" }];

export function NavigationBar() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-50/95 backdrop-blur-sm border-b border-gold/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link
            to={AppRoutes.HOME}
            className="flex items-center space-x-2 text-xl font-bold text-gold hover:text-gold-200 transition-colors"
          >
            <span>QSP</span>
            <span className="text-red-200">|</span>
            <span className="text-gold-200">QUANTUM INSTITUTE</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-gold/20 text-gold border border-gold/30"
                      : "text-gray-300 hover:text-gold hover:bg-dark-100"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
