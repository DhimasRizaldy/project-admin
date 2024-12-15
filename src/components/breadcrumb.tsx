import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink as BreadcrumbLinkComponent,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <BreadcrumbLinkComponent asChild>
    <Link to={to}>{children}</Link>
  </BreadcrumbLinkComponent>
);

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getBreadcrumbName = (value: string) => {
    switch (value) {
      case "riwayat-pembayaran":
        return "Riwayat Pembayaran";
      case "profile":
        return "Profile";
      default:
        return value
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
    }
  };

  return (
    <BreadcrumbComponent>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink to="/dashboard">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const breadcrumbName = getBreadcrumbName(value);

          return (
            <React.Fragment key={to}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{breadcrumbName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink to={to}>{breadcrumbName}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbComponent>
  );
}
