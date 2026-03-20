import { Breadcrumbs, Stack } from "@mui/joy";
import type { FC } from "react";
import { useBreadcrumbs } from "../lib";
import { Link, Outlet } from "react-router";

export const BaseLayout: FC = () => {
  const breadcrumbs = useBreadcrumbs();

  const breadcrumbsItems = breadcrumbs.map((breadcrumb, index) => (
    <Link key={index} to={breadcrumb.path}>
      {breadcrumb.name}
    </Link>
  ));

  return (
    <Stack>
      <Breadcrumbs aria-label="breadcrumbs">{breadcrumbsItems}</Breadcrumbs>

      <Outlet />
    </Stack>
  );
};
