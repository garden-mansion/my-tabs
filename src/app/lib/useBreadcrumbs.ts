import { useLocation } from "react-router"
import { BREADCRUMB as HOME_BREADCRUMB } from '@/pages/home'
import {PATH as NEW_TAB_PATH } from '@/pages/new-tab'
import type { BreadcrumbItem } from "@/shared/model";

export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const { pathname } = useLocation();

  const breadcrumbItems: BreadcrumbItem[] = [];

  if (pathname.includes(NEW_TAB_PATH)) {
    breadcrumbItems.push({
      name: HOME_BREADCRUMB,
      path: '/'
    })
  }

  return breadcrumbItems
}