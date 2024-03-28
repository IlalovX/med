import { AdminPathEnums } from "../enums/AdminEnums";
import {
  getRouteAdmin,
  getRouteAdminAddAdverts,
  getRouteAdminAddNews,
  getRouteAdminAddUser,
  getRouteAdminAdverts,
  getRouteAdminAdvertsDetails,
  getRouteAdminNewDetails,
  getRouteAdminNews,
  getRouteAdminSettings,
  getRouteAdminUserDetails,
  getRouteAdminUsers,
} from "../getPaths/AdminGetPaths";

export const AdminPathName: Record<AdminPathEnums, string> = {
  [AdminPathEnums.ADMIN]: getRouteAdmin(),
  [AdminPathEnums.ADMIN_USERS]: getRouteAdminUsers(),
  [AdminPathEnums.ADMIN_DETAILS_USER]: getRouteAdminUserDetails(""),
  [AdminPathEnums.ADMIN_ADD_USER]: getRouteAdminAddUser(),
  [AdminPathEnums.ADMIN_NEWS]: getRouteAdminNews(),
  [AdminPathEnums.ADMIN_ADD_NEWS]: getRouteAdminAddNews(),
  [AdminPathEnums.ADMIN_DETAILS_NEWS]: getRouteAdminNewDetails(""),
  [AdminPathEnums.ADMIN_ADVERTS]: getRouteAdminAdverts(),
  [AdminPathEnums.ADMIN_ADD_ADVERTS]: getRouteAdminAddAdverts(),
  [AdminPathEnums.ADMIN_DETAILS_ADVERTS]: getRouteAdminAdvertsDetails("", ""),
  [AdminPathEnums.ADMIN_SETTINGS]: getRouteAdminSettings(),
};
