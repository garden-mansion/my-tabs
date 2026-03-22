import { Breadcrumbs, Stack } from "@mui/joy";
import type { FC } from "react";
import { useBreadcrumbs } from "../lib";
import { Link, Outlet } from "react-router";

import styles from "../scss/BaseLayout.module.scss";

export const BaseLayout: FC = () => {
  const breadcrumbs = useBreadcrumbs();

  const breadcrumbsItems = breadcrumbs.map((breadcrumb, index) => (
    <Link className={styles["base-layout__breadcrumb-link"]} key={index} to={breadcrumb.path}>
      {breadcrumb.name}
    </Link>
  ));

  return (
    <Stack className={styles["base-layout"]}>
      <Breadcrumbs aria-label="breadcrumbs" sx={{ paddingLeft: 0, paddingRight: 0 }}>
        {breadcrumbsItems}
      </Breadcrumbs>

      <Outlet />
    </Stack>
  );
};
