export const getRouteAdmin = () => {
  return "/admin";
};

export const getRouteAdminUsers = () => {
  return "/admin/users";
};

export const getRouteAdminUserDetails = (id: string) => {
  if (id) {
    return `/admin/users/${id}`;
  }
  return "/admin/users/:id";
};

export const getRouteAdminAddUser = () => {
  return "/admin/users/add";
};

export const getRouteAdminNews = () => {
  return "/admin/news";
};

export const getRouteAdminNewDetails = (id?: string) => {
  if (id) {
    return `/admin/news/${id}`;
  }
  return "/admin/news/:id";
};

export const getRouteAdminAddNews = () => {
  return "/admin/news/add";
};

export const getRouteAdminAdverts = () => {
  return "/admin/adverts";
};

export const getRouteAdminAddAdverts = () => {
  return "/admin/adverts/add";
};

export const getRouteAdminAdvertsDetails = (
  facultyId: string,
  type: string
) => {
  if (facultyId && type) {
    return `/admin/adverts/${facultyId}/${type}`;
  } else if (facultyId) {
    return `/admin/adverts/${facultyId}`;
  }
  return "/admin/adverts/:facultyId/:type?";
};
export const getRouteAdminSettings = () => {
  return "/admin/settings";
};
